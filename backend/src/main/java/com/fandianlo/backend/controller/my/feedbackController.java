package com.fandianlo.backend.controller.my;

import com.fandianlo.backend.mapper.FeedBackMapper;
import com.fandianlo.backend.mapper.UserMapper;
import com.fandianlo.backend.pojo.feedbacks;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class feedbackController {
    @Autowired
    FeedBackMapper feedBackMapper;
    @Autowired
    UserMapper userMapper;

    @RequestMapping("/feedback/")
    public List<feedbacks> get() {
        return feedBackMapper.selectList(null);
    }

    @RequestMapping("/add/feedback/")
    public Map<String,String> add(@RequestParam Map<String,String> data) {
        String uname = data.get("userName");
        Integer uid = userMapper.getIdByName(uname);
        String content = data.get("content");
        feedbacks feedbacks = new feedbacks(null,uid,content,null,null,null);
        feedBackMapper.insert(feedbacks);

        Map<String,String> mp =new HashMap<>();
        mp.put("结果","成功");
        return mp;
    }
}
