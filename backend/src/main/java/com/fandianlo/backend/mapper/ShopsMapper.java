package com.fandianlo.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fandianlo.backend.pojo.shops;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ShopsMapper extends BaseMapper<shops> {
    List<shops> cate0();
    List<shops> cate1();
    List<shops> cate2();
    List<shops> cate3();
    List<shops> cate4();

    String getShopName(Integer id);
}
