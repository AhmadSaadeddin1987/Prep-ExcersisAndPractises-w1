let john = {
    firstname: "John",
    lastname: "Doe",
    driveCare() {
        function iamAFunctionNotAMethod() {
        console.log(this);
        }
        iamAFunctionNotAMethod();
        console.log(this.firstname + " " + this.lastname + " is driving a car");
    }
}
john.driveCare();