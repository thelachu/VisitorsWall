package com.lachu.visitors.service;

import com.lachu.visitors.dto.VisitorDto;
import com.lachu.visitors.entity.Visitor;
import com.lachu.visitors.exception.ResourceNotFoundException;
import com.lachu.visitors.mapper.VisitorMapper;
import com.lachu.visitors.repository.VisitorRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class VisitorServiceImpl implements VisitorService {

    private VisitorRepository VisitorRepository;

    @Override
    public VisitorDto createVisitor(VisitorDto VisitorDto) {
        Visitor savedVisitor = VisitorMapper.mapToVisitor(VisitorDto);
        VisitorRepository.save(savedVisitor);
        return VisitorMapper.mapToVisitorDto(savedVisitor);
    }

    @Override
    public VisitorDto getVisitorById(Long VisitorId) {
        Visitor Visitor = VisitorRepository.findById(VisitorId)
                .orElseThrow(() -> new ResourceNotFoundException("Visitor not exists with this id: " + VisitorId));
        return VisitorMapper.mapToVisitorDto(Visitor);
    }

    @Override
    public List<VisitorDto> getAllVisitors() {
        List<Visitor> Visitors = VisitorRepository.findAll();
        return Visitors.stream().map(VisitorMapper::mapToVisitorDto)
                .collect(Collectors.toList());
    }

    @Override
    public VisitorDto updateVisitor(Long VisitorId, VisitorDto VisitorDto) {
        Visitor Visitor = VisitorRepository.findById(VisitorId)
                .orElseThrow(() -> new ResourceNotFoundException("Visitor not exists with this id: " + VisitorId));
        Visitor.setName(VisitorDto.getName());
        Visitor.setUsername(VisitorDto.getUsername());
        Visitor.setDescription(VisitorDto.getDescription());
        Visitor.setImageUrl(VisitorDto.getImageUrl());

        Visitor updatedVisitor = VisitorRepository.save(Visitor);
        return VisitorMapper.mapToVisitorDto(updatedVisitor);
    }

    @Override
    public void deleteVisitorById(Long VisitorId) {
        Visitor Visitor = VisitorRepository.findById(VisitorId)
                .orElseThrow(() -> new ResourceNotFoundException("Visitor not exists with this id:" + VisitorId));
        VisitorRepository.deleteById(VisitorId);
    }
}
