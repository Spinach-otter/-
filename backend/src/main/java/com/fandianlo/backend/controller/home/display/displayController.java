package com.fandianlo.backend.controller.home.display;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fandianlo.backend.mapper.DishesMapper;
import com.fandianlo.backend.mapper.ShopsMapper;
import com.fandianlo.backend.pojo.dishes;
import com.fandianlo.backend.pojo.shops;
import com.fandianlo.backend.pojo.shopsDTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
public class displayController {
    @Autowired
    ShopsMapper shopsMapper;
    @Autowired
    DishesMapper dishesMapper;

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

    @RequestMapping("/dish/info/")
    public dishes getInfoById(@RequestParam Integer id) {
        QueryWrapper<dishes> queryWrapper = new QueryWrapper<>();
        queryWrapper.eq("dishes_id", id); // 根据 dishes_id 字段进行查询，假设这个字段存储了菜品的唯一标识

        return dishesMapper.selectOne(queryWrapper);
    }
}
