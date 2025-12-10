package org.example.sample.controller;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;

@Controller
public class AdminController {

    @ModelAttribute
    public void setOpenCollapse(Model model, HttpServletRequest request) {
        String uri = request.getRequestURI();
        if (!uri.equals("/admin/code")) {
            model.addAttribute("openCollapse", "adminSubmenu");
        }
    }
    
    @GetMapping("/admin/code")
    public String adminCode() {
        return "/admin/code";
    }

    @GetMapping("/admin/info/list")
    public String adminInfoList() {
        return "/admin/info/list";
    }

    @GetMapping("/admin/info/sample")
    public String adminInfoSample() {
        return "/admin/info/sample";
    }

    @GetMapping("/admin/menu/list")
    public String adminMenuList() {
        return "/admin/menu/list";
    }
    
    @GetMapping("/admin/role/list")
    public String adminRoleList() {
        return "/admin/role/list";
    }
    
    @GetMapping("/admin/revision/list")
    public String adminRevisionList() {
        return "/admin/revision/list";
    }
    
    @GetMapping("/admin/syncResult/list")
    public String adminSyncResultList() {
        return "/admin/syncResult/list";
    }
}