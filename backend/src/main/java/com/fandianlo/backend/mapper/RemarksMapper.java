package com.fandianlo.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fandianlo.backend.pojo.DishesRemarksDTO;
import com.fandianlo.backend.pojo.Remarks;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface RemarksMapper extends BaseMapper<Remarks> {
    List<DishesRemarksDTO> getMarkByDishId(Integer id);
}
