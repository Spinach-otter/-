package com.fandianlo.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fandianlo.backend.pojo.User;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface UserMapper extends BaseMapper<User> {
    Integer getUserLikesCount(String username);
    Integer getUserRemarksCount(String username);
    Integer getIdByName(String name);
}
