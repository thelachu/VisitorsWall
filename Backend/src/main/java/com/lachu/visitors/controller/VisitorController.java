package com.lachu.visitors.controller;

import com.lachu.visitors.dto.VisitorDto;
import com.lachu.visitors.service.VisitorService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/visitors")
@AllArgsConstructor
public class VisitorController {

    private VisitorService VisitorService;

    //Rest API for Posting a Visitor to a database
    @PostMapping
    public ResponseEntity<VisitorDto> createVisitor(@RequestBody VisitorDto VisitorDto) {
        VisitorDto savedVisitor = VisitorService.createVisitor(VisitorDto);
        return new ResponseEntity<>(savedVisitor, HttpStatus.CREATED);
    }

    //Rest Api for Getting a Visitor from a database
    @GetMapping("/{id}")
    public ResponseEntity<VisitorDto> getVisitorById(@PathVariable("id") Long VisitorId) {
        VisitorDto Visitor = VisitorService.getVisitorById(VisitorId);
        return ResponseEntity.ok(Visitor);
    }

    //Rest Api for getting all Visitors from a database
    @GetMapping
    public ResponseEntity<List<VisitorDto>> getAllVisitors() {
        List<VisitorDto> Visitors = VisitorService.getAllVisitors();
        return ResponseEntity.ok(Visitors);
    }

    //Rest API for update Visitor in a database
    @PutMapping("/{id}")
    public ResponseEntity<VisitorDto> updateVisitor(@PathVariable("id") Long VisitorId,
                                                      @RequestBody VisitorDto VisitorDto) {
        VisitorDto updatedVisitor = VisitorService.updateVisitor(VisitorId, VisitorDto);
        return ResponseEntity.ok(updatedVisitor);
    }

    //Rest API for delete Visitor in a database
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteVisitorById(@PathVariable("id") Long VisitorId) {
        VisitorService.deleteVisitorById(VisitorId);
        return ResponseEntity.noContent().build();
    }
}
