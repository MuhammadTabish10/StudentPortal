package com.example.StudentPortal.exception;

public class RecordNotFoundException extends RuntimeException
{
    public RecordNotFoundException(String message)
    {
        super(message);
    }
}
