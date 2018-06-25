function calculatorComputation(displayInstance) {

  this.operand1 = "0";
  this.operand2 = "0";
  this.operator = 0;
  this.opflag = false;
  this.displayInstance = displayInstance.displayComp;
}

calculatorComputation.prototype.setTextValue = function (val) {
  this.displayInstance.value = val;
};


calculatorComputation.prototype.onNumberClick = function (val) {
  if (this.operand2 == 0 && (this.operand2.indexOf('.') == -1)) {
    this.operand2 = val;
  }
  else {
    this.operand2 += val;
  }
  this.setTextValue(this.operand2);
};


calculatorComputation.prototype.Dot = function() {

  if(this.operand2.length == 0 )
    this.operand2 = "0.";
  else {
    if( this.operand2.indexOf(".") == -1)
      this.operand2 += '.';

  }
  this.setTextValue( this.operand2);

};


//if "+-" button is clicked
calculatorComputation.prototype.PlusMinus = function() {

  if ( this.operand2.toString().indexOf("-") == 0 )    {
    this.operand2 = this.operand2.toString().substring(1);
  }
  else{
    this.operand2 = "-" + this.operand2;
  }
  this.setTextValue( this.operand2);
};

//if "CE" is clicked
calculatorComputation.prototype.Clear = function() {

  this.operand2 = "";
  this.setTextValue( this.operand2);};


//if "C" is clicked
calculatorComputation.prototype.allClear = function() {

  this.operand1 = "";
  this.operand2 = "";
  this.operator = 0;
  this.setTextValue( this.operand2);
};

//assigning values to operators
calculatorComputation.prototype.Operate = function(op) {


  if ( op.indexOf("*") > -1 ) { this.operator = 1; };       //codes for *
  if ( op.indexOf("/") > -1 ) { this.operator = 2; };       // slash (divide)
  if ( op.indexOf("+") > -1 ) { this.operator = 3; };       // sum
  if ( op.indexOf("-") > -1 ) { this.operator = 4; };       // difference
  if ( op.indexOf("%") > -1 ) { this.operator = 5; };       //modulus

  this.operand1 = this.operand2;                 //store value
  this.operand2 = "";                     //or we could use "0"
  this.setTextValue( this.operand2);
};

//computation of  2 numbers
calculatorComputation.prototype.Calculate = function(){

  if ( this.operator == 1 ) { this.operand2 = Number(this.operand1) * Number(this.operand2); };
  if ( this.operator == 2 ) { this.operand2 = Number(this.operand1) / Number(this.operand2); };
  if ( this.operator == 3 ) { this.operand2 = Number(this.operand1) + Number(this.operand2); };
  if ( this.operator == 4 ) { this.operand2 = Number(this.operand1) - Number(this.operand2); };
  if ( this.operator == 5 ) { this.operand2 = Number(this.operand1) % Number(this.operand2); };

  this.operator = 0;                //clear this.operator
  this.operand1    = "0";              //clear this.operand1
  this.setTextValue( this.operand2);
};

calculatorComputation.prototype.onOperatorClick = function (val) {
  console.log(val);
  if(val == "." )
    this.Dot();
  else if( val == "+-" )
    this.PlusMinus();

  else if( val == "CE" )
    this.Clear();

  else if( val == "C" )
    this.allClear();
  else if( val == "+" || val == "-" || val == '*' || val == "/" || val == "%" ){
    this.Operate(val);
  }
  else if( val == "=" )
    this.Calculate();

};
