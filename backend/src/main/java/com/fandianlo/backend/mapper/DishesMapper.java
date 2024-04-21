package com.fandianlo.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fandianlo.backend.pojo.dishes;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface DishesMapper extends BaseMapper<dishes> {
    List<dishes> getTopThreeDishes(Integer shopId);
    List<dishes> getDishesByShopId(Integer shopId);
    List<dishes> getDishesByKeyWords(String kw);


    List<String> getDishesByDNumAndDFloor(String num,String floor);
    List<dishes> getDishesByDNumAndDFloorAndDShop(String num,String floor,String shop);
}
