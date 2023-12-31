package com.fandianlo.backend.mapper;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.fandianlo.backend.pojo.notice;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface NoticeMapper extends BaseMapper<notice> {
    public notice getInfoByNid(Integer id);
}
