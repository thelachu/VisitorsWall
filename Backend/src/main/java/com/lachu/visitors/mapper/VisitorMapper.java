package com.lachu.visitors.mapper;

import com.lachu.visitors.dto.VisitorDto;
import com.lachu.visitors.entity.Visitor;

public class VisitorMapper {
    public static VisitorDto mapToVisitorDto(Visitor Visitor) {
        return new VisitorDto(
                Visitor.getId(),
                Visitor.getName(),
                Visitor.getUsername(),
                Visitor.getDescription(),
                Visitor.getImageUrl()
        );
    }

    public static Visitor mapToVisitor(VisitorDto VisitorDto) {
        return new Visitor(
                VisitorDto.getId(),
                VisitorDto.getName(),
                VisitorDto.getUsername(),
                VisitorDto.getDescription(),
                VisitorDto.getImageUrl()
        );
    }
}
