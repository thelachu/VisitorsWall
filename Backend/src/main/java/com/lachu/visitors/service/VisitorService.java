package com.lachu.visitors.service;

import com.lachu.visitors.dto.VisitorDto;

import java.util.List;


public interface VisitorService {
    VisitorDto createVisitor(VisitorDto VisitorDto);
    VisitorDto getVisitorById(Long VisitorId);
    List<VisitorDto> getAllVisitors();
    VisitorDto updateVisitor(Long VisitorId,VisitorDto VisitorDto);
    void deleteVisitorById(Long VisitorId);
}
