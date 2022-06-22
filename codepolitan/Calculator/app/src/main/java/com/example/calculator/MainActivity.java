package com.example.calculator;

import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.TextView;
import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;

public class MainActivity extends AppCompatActivity {

    // Declare Variable
    EditText etNumber1, etNumber2;
    Button btnAdd, btnSub, btnMultiply, btnDiv, btnClear;
    TextView tvResult;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        // Connect XML
        etNumber1 = findViewById(R.id.et_NumInput1);
        etNumber2 = findViewById(R.id.et_NumInput2);
        btnAdd = findViewById(R.id.btn_Plus);
        btnSub = findViewById(R.id.btn_Minus);
        btnMultiply = findViewById(R.id.btn_Multiply);
        btnDiv = findViewById(R.id.btn_Divide);
        btnClear = findViewById(R.id.btn_Clear);
        tvResult = findViewById(R.id.tv_result);

        // OnClick Listener
        btnAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                double firstNum = Double.parseDouble(etNumber1.getText().toString());
                double secondNum = Double.parseDouble(etNumber2.getText().toString());
                double result = firstNum + secondNum;
                tvResult.setText(String.valueOf(result));
            }
        });

        btnSub.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                double firstNum = Double.parseDouble(etNumber1.getText().toString());
                double secondNum = Double.parseDouble(etNumber2.getText().toString());
                double result = firstNum - secondNum;
                tvResult.setText(String.valueOf(result));
            }
        });

        btnMultiply.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                double firstNum = Double.parseDouble(etNumber1.getText().toString());
                double secondNum = Double.parseDouble(etNumber2.getText().toString());
                double result = firstNum * secondNum;
                tvResult.setText(String.valueOf(result));
            }
        });

        btnDiv.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                double firstNum = Double.parseDouble(etNumber1.getText().toString());
                double secondNum = Double.parseDouble(etNumber2.getText().toString());
                double result = firstNum / secondNum;
                tvResult.setText(String.valueOf(result));
            }
        });

        btnClear.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                etNumber1.getText().clear();
                etNumber2.getText().clear();
                tvResult.setText("0");
            }
        });
    }
}