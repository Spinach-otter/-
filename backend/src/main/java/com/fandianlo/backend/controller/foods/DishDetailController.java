package com.fandianlo.backend.controller.foods;

import com.fandianlo.backend.mapper.LikesMapper;
import com.fandianlo.backend.mapper.RemarksMapper;
import com.fandianlo.backend.mapper.UserMapper;
import com.fandianlo.backend.pojo.DishesRemarksDTO;
import com.fandianlo.backend.pojo.Remarks;
import com.fandianlo.backend.pojo.likes;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class DishDetailController {
    @Autowired
    RemarksMapper remarksMapper;
    @Autowired
    LikesMapper likesMapper;
    @Autowired
    UserMapper userMapper;

    @RequestMapping("/marks/")
    public List<DishesRemarksDTO> getMarks(@RequestParam Map<String ,String> data) {
        return remarksMapper.getMarkByDishId(Integer.valueOf(data.get("id")));
    }

    @RequestMapping("/checkFavorite/")
    public boolean check(@RequestParam Map<String,String> data) {
        String uname = data.get("userName");
        Integer did = Integer.valueOf(data.get("dishesId"));
        Integer uid = userMapper.getIdByName(uname);
//        System.out.println("hihihi"+likesMapper.HaveLikes(uid,did));
        if(likesMapper.HaveLikes(uid,did).isEmpty()) return false;
        else return true;
    }

    @RequestMapping("/del/likes/")
    public Map<String ,String > del(@RequestParam Map<String,String> data) {
        String uname = data.get("userName");
        Integer did = Integer.valueOf(data.get("dishesId"));
        Integer uid = userMapper.getIdByName(uname);
        likesMapper.delete(uid,did);

        Map<String,String> mp =new HashMap<>();
        mp.put("结果","成功");
        return mp;
    }

    @RequestMapping("/add/likes/")
    public Map<String ,String > add(@RequestParam Map<String,String> data) {
        String uname = data.get("userName");
        Integer did = Integer.valueOf(data.get("dishesId"));
        Integer uid = userMapper.getIdByName(uname);
        likes likes =new likes(null,uid,did);
        likesMapper.insert(likes);

        Map<String,String> mp =new HashMap<>();
        mp.put("结果","成功");
        return mp;
    }

    @RequestMapping("/add/mark/")
    public Map<String ,String > addMark(@RequestParam Map<String,String> data) {
        String uname = data.get("userName");
        Integer did = Integer.valueOf(data.get("dishesId"));
        String content = data.get("content");
        Integer uid = userMapper.getIdByName(uname);
        Remarks remarks = new Remarks(null,uid,did,content);
        remarksMapper.insert(remarks);

        Map<String,String> mp =new HashMap<>();
        mp.put("结果","成功");
        return mp;
    }
}
