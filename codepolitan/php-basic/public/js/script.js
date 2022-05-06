$(() => {
  $("#addButton").on("click", () => {
    $("#employeeModalLabel").html("Add Employee");
    document.getElementById("submitButton").name = "submitButton";
  });
  $(".editButton").on("click", function () {
    $("#employeeModalLabel").html("Edit Employee");

    const id = $(this).attr("data-id");

    $.ajax({
      url: "http://localhost/codepolitan-php/src/controller/getEmployee.php",
      data: { id: id },
      method: "post",
      dataType: "json",
      success: function (data) {
        console.log(data);
        document.getElementById("employeeIdInput").value = data.EMPLOYEE_ID;
        document.getElementById("employeeNameInput").value = data.EMPLOYEE_NAME;
        document.getElementById("employeeAddressInput").value = data.ADDRESS;
        document.getElementById("employeeAgeInput").value = data.AGE;
        document.getElementById("employeeGenderInput").value = data.GENDER;
      },
    });

    document.getElementById("submitButton").name = "submitEditButton";
  });
});
