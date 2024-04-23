package com.fandianlo.backend.controller.account;

import com.baomidou.mybatisplus.core.conditions.query.QueryWrapper;
import com.fandianlo.backend.mapper.UserMapper;
import com.fandianlo.backend.pojo.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AccountControleeer {
    private String appId = "wx587e54fe283722f4";
    private String secret = "3ae6e1497b8e81106603a5ebcb18606e";

    @Autowired
    UserMapper userMapper;

    @RequestMapping("/add/user/")
    public Map<String,String> addUser(@RequestParam Map<String,String> data) {
        String name = data.get("name");
        String avatar = data.get("avatar");

        QueryWrapper<User> queryWrapper = new QueryWrapper<>();
        Map<String,String> mp =new HashMap<>();
        if(userMapper.selectList(queryWrapper.eq("name",name)).isEmpty()) {
            User user = new User(null,name,avatar);
            userMapper.insert(user);
        }

        mp.put("结果","成功");
        return mp;
    }

    @RequestMapping("/get/openid")
    public ResponseEntity<?> getOpenid(@RequestBody Map<String, String> requestBody ){
        System.out.println("user of get openid!");
        String code = requestBody.get("code");
        if (code == null || code.isEmpty()) {
            return ResponseEntity.badRequest().body("Invalid code");
        }

        String openid = getOpenidFromCode(code);
        if (openid == null || openid.isEmpty()) {
            return ResponseEntity.badRequest().body("Failed to get openid");
        }
        System.out.println("openid:"+openid);
        return ResponseEntity.ok(openid);
    }

    private String getOpenidFromCode(String code) {
        String url = "https://api.weixin.qq.com/sns/jscode2session" +
                "?appid=" + appId +
                "&secret=" + secret +
                "&js_code=" + code +
                "&grant_type=authorization_code";

        System.out.println("ask to wx service!");
        // 发送GET请求
        RestTemplate restTemplate = new RestTemplate();
        String response = restTemplate.getForObject(url, String.class);

        // 解析响应，获取openid
        // 这里简单处理，实际中需要根据微信API返回的格式解析
        if (response != null && response.contains("openid")) {
            int start = response.indexOf("openid") + 9;
            int end = response.indexOf("\"", start);
            System.out.println(response.substring(start, end));
            return response.substring(start, end);
        }

        return null; // 获取失败
    }
}
