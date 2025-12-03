package org.example.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class AdminUserController {

    @ModelAttribute
    public void setOpenCollapse(Model model) {
        model.addAttribute("openCollapse", "adminUserSubmenu");
    }
    
    @GetMapping("/adminUser/all/list")
    public String adminUserListAll() {
        return "/adminUser/listAll";
    }

    @GetMapping("/adminUser/list")
    public String adminUserList() {
        return "/adminUser/list";
    }

    @GetMapping("/adminUser/detail/list")
    public String adminUserDetailList() {
        return "/adminUser/detailList";
    }
}