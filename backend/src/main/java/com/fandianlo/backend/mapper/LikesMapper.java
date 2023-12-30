package com.fandianlo.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fandianlo.backend.pojo.likes;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface LikesMapper extends BaseMapper<likes> {
    public List<likes> HaveLikes(Integer uid, Integer did);
    public void delete(Integer uid,Integer did);
}
