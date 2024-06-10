package com.example.task_list_api.response;

import java.time.LocalDateTime;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class TaskResponse {
    @Schema(description = "Id of Task")
    private Integer id;

    @Schema(description = "Description of Task")
    private String title;

    @Schema(description = "Status of Task: Pending of Completed")
    private String status;

    @Schema(description = "Datetime of creation")
    private LocalDateTime createdAt;

    @Schema(description = "Datetime of update")
    private LocalDateTime updatedAt;
}
