package com.example.task_list_api.enums;

import lombok.Getter;

@Getter
public enum StatusEnum {
    PENDING(1, "Pending"),
    COMPLETED(2, "Completed");

    private Integer value;
    private String text;

    StatusEnum(Integer value, String text) {
        this.value = value;
        this.text = text;
    }

    public static StatusEnum fromValue(Integer value) {
        for (StatusEnum status : StatusEnum.values()) {
            if (status.value.equals(value)) {
                return status;
            }
        }
        throw new IllegalArgumentException("Invalid value: " + value);
    }

    public static StatusEnum fromText(String text) {
        for (StatusEnum status : StatusEnum.values()) {
            if (status.text.equalsIgnoreCase(text)) {
                return status;
            }
        }
        throw new IllegalArgumentException("Invalid text: " + text);
    }
}
