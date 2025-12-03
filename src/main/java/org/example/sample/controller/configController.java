package org.example.sample.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class configController {

    @ModelAttribute
    public void setOpenCollapse(Model model) {
        model.addAttribute("openCollapse", "formSubmenu");
    }

    @GetMapping("/config/user/list")
    public String formElements() {
        return "/config/userList";
    }

    @GetMapping("/config/role/list")
    public String configRoleList() {
        return "/config/roleList";
    }

    @GetMapping("/config/log/list")
    public String configLogList() {
        return "/config/logList";
    }
}