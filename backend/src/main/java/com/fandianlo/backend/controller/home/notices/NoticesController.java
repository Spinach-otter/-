package com.fandianlo.backend.controller.home.notices;

import com.fandianlo.backend.mapper.NoticeMapper;
import com.fandianlo.backend.pojo.notice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class NoticesController {
    @Autowired
    NoticeMapper noticeMapper;

    @RequestMapping("/notices/")
    public List<notice> Notices() {
//        return noticesMapper.getAll();
        return noticeMapper.selectList(null);
    }

    @RequestMapping("/notice/info/")
    public notice info(@RequestParam Map<String,String> data) {
        Integer id= Integer.valueOf(data.get("id"));
        return noticeMapper.getInfoByNid(id);
    }
}
