package com.fandianlo.backend.controller.home.display;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fandianlo.backend.mapper.DishesMapper;
import com.fandianlo.backend.mapper.LikesMapper;
import com.fandianlo.backend.mapper.ShopsMapper;
import com.fandianlo.backend.mapper.UserMapper;
import com.fandianlo.backend.pojo.dishes;
import com.fandianlo.backend.pojo.likes;
import com.fandianlo.backend.pojo.shops;
import com.fandianlo.backend.pojo.shopsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;
import java.util.stream.Collectors;

@RestController
public class displayController {
    @Autowired
    ShopsMapper shopsMapper;
    @Autowired
    DishesMapper dishesMapper;
    @Autowired
    UserMapper userMapper;
    @Autowired
    LikesMapper likesMapper;

    @RequestMapping("/display/")
    public List<shopsDTO> getDisplay(){
        List<shops> shopsList=shopsMapper.selectList(null);
        List<shopsDTO> shopsDTOList=new ArrayList<>();
        for(shops shop:shopsList) {
            shopsDTO shopsDTO = new shopsDTO();
            shopsDTO.setShopId(shop.getShopId());
            shopsDTO.setShopName(shop.getShopName());
            shopsDTO.setShopPhoto(shop.getShopPhoto());

            List<dishes> TopThreeDishes = dishesMapper.getTopThreeDishes(shop.getShopId());
            shopsDTO.setTopThreeDishes(TopThreeDishes);
            shopsDTOList.add(shopsDTO);
        }

        return shopsDTOList;
    };

    @RequestMapping("/dishes/")
    public List<dishes> getShopDishes(
            @RequestParam(value = "query", required = false) String query,
            @RequestParam(value = "cid", required = false) String cid,
            @RequestParam(value = "pagenum", required = false, defaultValue = "1") int pageNum,
            @RequestParam(value = "pagesize", required = false, defaultValue = "10") int pageSize
    ) {
        return dishesMapper.getDishesByShopId(Integer.valueOf(cid));
    }
    @RequestMapping("/Recommend_dishes/")
    public List<dishes> getRecommend(
            @RequestParam(value = "isLoggedIn", required = false) Boolean isLoggedIn,
            @RequestParam(value = "userName", required = false) String userName
    ) {
//        System.out.println(userName);
        if (userName == null || userName.equals("undefined")) {
            // 获取所有菜品列表
            List<dishes> allDishes = dishesMapper.selectList(null);

            // 打乱菜品列表
            Collections.shuffle(allDishes);

            // 如果菜品数量大于6，只返回前6个菜品，否则返回全部菜品
            int count = Math.min(allDishes.size(), 6);
            List<dishes> recommendedDishes = allDishes.subList(0, count);

            return recommendedDishes;
        }

        //通过用户名得到用户id
        Integer userID = userMapper.getIdByName(userName);
//        System.out.println(userID);
        // 1. 获取传入用户喜欢的菜品
        QueryWrapper<likes> queryWrapper =new QueryWrapper<>();
        List<likes> userLikes = likesMapper.selectList(queryWrapper.eq("user_id",userID));
        System.out.println(userLikes);
        // 2. 获取所有其他用户的喜欢的菜品
        List<likes> allLikes = likesMapper.selectList(null);
        // 3. 计算传入用户与其他用户的相似度
        Map<Integer, Double> userSimilarity = calculateUserSimilarity(userID, userLikes, allLikes);
        System.out.println("simi"+userSimilarity);
//        // 4. 获取与传入用户相似度最高的用户
//        Optional<Map.Entry<Integer, Double>> mostSimilarUser = userSimilarity.entrySet().stream()
//                .max(Comparator.comparing(Map.Entry::getValue));
//        System.out.println("simiUser"+mostSimilarUser);
//        System.out.println("simiUser"+mostSimilarUser.get().getKey());
//        List<dishes> recommendedDishes = new ArrayList<>();
//        // 5. 如果有最相似用户，获取其喜欢的菜品作为推荐菜品
//        if (mostSimilarUser.isPresent()) {
//            Integer mostSimId = mostSimilarUser.get().getKey();
//            QueryWrapper<likes> likesQueryWrapper=new QueryWrapper<>();
//            List<likes> similarUserLikes = likesMapper.selectList(likesQueryWrapper.eq("user_id",mostSimId));
//            System.out.println("simiLike"+similarUserLikes);
//            for (likes like : similarUserLikes) {
//                QueryWrapper<dishes> queryWrapper1=new QueryWrapper<>();
//                dishes dish = dishesMapper.selectOne(queryWrapper1.eq("dishes_id",like.getDishesId()));
//                if (dish != null) {
//                    recommendedDishes.add(dish);
//                }
//            }
//        }
//        System.out.println("simiDish"+recommendedDishes);
//
//        return recommendedDishes;

        // 4. 获取与传入用户相似度最高的用户列表，并按相似度降序排序
        List<Integer> similarUserIds = userSimilarity.entrySet().stream()
                .sorted(Map.Entry.<Integer, Double>comparingByValue().reversed())
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        // 5. 遍历相似用户列表，获取其喜欢的菜品，并加权推荐
        List<dishes> recommendedDishes = new ArrayList<>();
        for (Integer similarUserId : similarUserIds) {
            QueryWrapper<likes> likesQueryWrapper=new QueryWrapper<>();
            List<likes> similarUserLikes = likesMapper.selectList(likesQueryWrapper.eq("user_id", similarUserId));
            for (likes like : similarUserLikes) {
                QueryWrapper<dishes> queryWrapper1=new QueryWrapper<>();
                dishes dish = dishesMapper.selectOne(queryWrapper1.eq("dishes_id",like.getDishesId()));
                if (dish != null && !recommendedDishes.contains(dish)) {
                    // 如果推荐的菜品列表中没有重复的菜品，且菜品不在用户喜欢的列表中
                    recommendedDishes.add(dish);
                }
            }
            // 如果推荐菜品已达到6个，跳出循环
            if (recommendedDishes.size() >= 6) {
                break;
            }
        }

        // 如果推荐菜品不足6个，补充剩余的菜品
        if (recommendedDishes.size() < 6) {
            List<dishes> remainingDishes = dishesMapper.selectList(null);
            for (dishes dish : remainingDishes) {
                if (!recommendedDishes.contains(dish)) {
                    recommendedDishes.add(dish);
                }
                // 如果推荐菜品已达到6个，跳出循环
                if (recommendedDishes.size() >= 6) {
                    break;
                }
            }
        }

        return recommendedDishes;
    }
    // 计算用户相似度的方法，可以根据实际情况扩展和调整
    private Map<Integer, Double> calculateUserSimilarity(Integer userId, List<likes> userLikes, List<likes> allLikes) {
        Map<Integer, List<String>> userItemMap = new HashMap<>();
        Map<Integer, Double> similarityMap = new HashMap<>();

        // 构建用户-菜品关系映射
        for (likes like : allLikes) {
            if (!userItemMap.containsKey(like.getUserId())) {
                userItemMap.put(like.getUserId(), new ArrayList<>());
            }
            userItemMap.get(like.getUserId()).add(like.getDishesId().toString());
        }

        // 计算用户之间的相似度
        for (Map.Entry<Integer, List<String>> entry : userItemMap.entrySet()) {
            Integer otherUserId = entry.getKey();
            if (otherUserId.equals(userId)) {
                continue; // 跳过自身
            }
            List<String> otherUserItems = entry.getValue();
            List<String> intersection = new ArrayList<>(userLikes.stream()
                    .map(like -> like.getDishesId().toString())
                    .collect(Collectors.toSet()));
            intersection.retainAll(otherUserItems);

            double similarity = (double) intersection.size() / Math.sqrt(userLikes.size() * otherUserItems.size());
            similarityMap.put(otherUserId, similarity);
        }

        return similarityMap;
    }


    @RequestMapping("/Recommend_dishes_shop/")
    public Map<String,String> getRecommendShopName(@RequestParam Map<String,String> data) {
        Integer id = Integer.valueOf(data.get("shop_id"));
        String shop_name = shopsMapper.getShopName(id);
        Map<String,String> mp =new HashMap<>();
        mp.put("shop_name",shop_name);
        return mp;
    }
    @RequestMapping("/dish/info/")
    public dishes getInfoById(@RequestParam Integer id) {
        QueryWrapper<dishes> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("dishes_id", id); // 根据 dishes_id 字段进行查询，假设这个字段存储了菜品的唯一标识

        return dishesMapper.selectOne(queryWrapper);
    }
}
