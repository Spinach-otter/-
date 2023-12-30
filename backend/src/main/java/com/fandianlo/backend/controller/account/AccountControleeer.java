package com.fandianlo.backend.controller.account;

import com.fandianlo.backend.mapper.UserMapper;
import com.fandianlo.backend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountControleeer {
    @Autowired
    UserMapper userMapper;

    @RequestMapping("/add/user/")
    public Map<String,String> addUser(@RequestParam Map<String,String> data) {
        User user = new User(null,data.get("name"),data.get("avatar"));
        userMapper.insert(user);
        Map<String,String> mp =new HashMap<>();
        mp.put("结果","成功");
        return mp;
    }
}
