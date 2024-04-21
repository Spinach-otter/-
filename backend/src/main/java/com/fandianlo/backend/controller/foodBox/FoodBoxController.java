package com.fandianlo.backend.controller.foodBox;

import com.fandianlo.backend.mapper.DishesMapper;
import com.fandianlo.backend.mapper.ShopsMapper;
import com.fandianlo.backend.pojo.User;
import com.fandianlo.backend.pojo.dishes;
import com.fandianlo.backend.pojo.shops;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.*;

@RestController
public class FoodBoxController {
    @Autowired
    DishesMapper dishesMapper;

    @Autowired
    ShopsMapper shopsMapper;
    @RequestMapping("/getRandomFood/")
    public dishes addUser() {
        Random random=new Random();
        //随机生成食堂id
        String dishesNum=Integer.toString(random.nextInt(2)+1);
        //随机生成楼层
        String dishesFloor="";
        if(dishesNum.equals("1"))
            dishesFloor=Integer.toString(random.nextInt(2)+1);
        else
            dishesFloor=Integer.toString(random.nextInt(3)+1);
        System.out.println("shitang:"+dishesNum+":"+dishesFloor);
        //获取店铺
        List<String> shopsList=new ArrayList<>();
        shopsList=dishesMapper.getDishesByDNumAndDFloor(dishesNum,dishesFloor);
        System.out.println("shopsize："+shopsList.size());
        String shop= shopsList.get(random.nextInt(shopsList.size()));
        //筛选不包含口味、加料的菜品es
        List<dishes> dishesList=new ArrayList<>();
        dishesList=dishesMapper.getDishesByDNumAndDFloorAndDShop(dishesNum,dishesFloor,shop);
        dishes result=dishesList.get(random.nextInt(dishesList.size()));
        result.setDishesShop(shopsMapper.getShopName(Integer.parseInt(shop)));
        return result;
    }
}
