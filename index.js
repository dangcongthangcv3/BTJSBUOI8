var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// khai báo mảng
const arra = []

// Thêm vào mảng
document.getElementById('add').onclick = function(){
  let nhapSo =Number(document.getElementById('txtNhapSo').value)
  
  arra.push(nhapSo)
  console.log(arra)
  document.getElementById('ketQua').innerHTML = '[' +arra+ ']'
}

// Câu 1 Tổng số dương
var a = [1,2,-8,7,6,-8,-3]
document.getElementById('btnTongSoduong').onclick = function(){
  let a = tongNumber(arra)
  document.getElementById('ketQua1').innerHTML = a
}

//hàm Tổng số dương
function tongNumber(mang){
  let sum = 0;
  for(let i=0; i<mang.length; i++){
    if(mang[i]>0){
      sum +=mang[i]
    }
  }
  return sum
}

//Câu 2 đếm số dương
document.getElementById('btnDemSoDuong').onclick = function(){
  let b = demSoDuong(arra)
  document.getElementById('ketQua2').innerHTML = b
}
function demSoDuong(mang){
  var countN = 0
  for(let i =0; i<mang.length;i++){
    if(mang[i]>0){
      countN+=1
    }
  }
  return countN
}

//Câu 3 Tìm số nhỏ nhất
document.getElementById('btnMinNumber').onclick = function(){
  let inra = minNumber(arra)
  document.getElementById('ketQua3').innerHTML = inra
}
function minNumber(mang){
  let c= 0
  for(let i =0; i<arra.length;i++){
    if(c>mang[i]){
      c= mang[i]
    }
  }
  return c
}


//Câu 4 Tìm dương số nhỏ nhất
document.getElementById('btnMinCountNumber').onclick = function(){
  let inra = minCountNumber(arra)
  document.getElementById('ketQua4').innerHTML = inra
}
function minCountNumber(mang){
  let min = -1
  for(let i =0; i<mang.length;i++){
    if(mang[i]>0 &&(mang[i]<min|| min == -1)){
      min= mang[i]
    }
  }
   if(min !=-1){
     return min
   }
   else{
     return "Không tìm thấy"
   }
}


// câu 5 Tìm số chẵn cuối cùng
document.getElementById('btnEndNumber').onclick = function(){
  let inra = timSoChanCuoi(gg)
  document.getElementById('ketQua5').innerHTML = inra
}
function timSoChanCuoi(mang){
  let min = 0
  for(let i=0; i<mang.length;i++){
    if(mang[i]%2==0){
      min = mang[i]
    }
  }
  return min
}


//Câu 6 đổi chổ
document.getElementById('btnChangeNumber').onclick = function(){
  // debugger
  let a = Number(document.getElementById('viTria').value)
  let b = Number(document.getElementById('viTrib').value)
  let inra = doiCho(arra,a,b)
  document.getElementById('ketQua6').innerHTML = inra
}
function doiCho(mang,vt1, vt2){
  let tam = mang[vt1]
    mang[vt1] = mang[vt2]
    mang[vt2] = tam
    return mang
}

//câu 7 sắp xếp tăng dần
document.getElementById('btnSortNumber').onclick = function(){
  debugger
  let inra = sapXepTangDan(arra)
  document.getElementById('ketQua7').innerHTML = inra
}
function sapXepTangDan(mang){
  for(let i =0 ; i<mang.length; i++){
    for(let j =0; j<=mang.length; j++){
      if(mang[i]<mang[j]){
        let min = mang[i]
        mang[i]= mang[j]
        mang[j]=min
      }
    }
  }
  return mang
}

//câu 8 Tìm SNT đầu tiên
document.getElementById('btnfindFirtNumber').onclick = function(){
  debugger
  let inra = timSoNguyenDauTien(arra)
  // document.getElementById('ketQua8').innerHTML = inra
   if(inra ==0){
     document.getElementById('ketQua8').innerHTML = 'Không có số nguyên tố'
   }
   else{
     document.getElementById('ketQua8').innerHTML = inra
   }
}
function timSoNguyenDauTien(mang){
  for (let i =0; i<mang.length;i++){
    if(snt(mang[i])==1){
      return mang[i]
      break
    }
  }
}
function snt(n){
  let flag = 1
  if(n<2){
    return flag=0
  }
  let i = 2
  while(i<n){
    if(n%i==0){
      flag = 0
      break
    }i++
  }
  return flag
}

//Câu 9 Đếm số nguyên
var arraAdd = []
document.getElementById('btnAddNumber').onclick = function(){
  let ThemSo = Number(document.getElementById('txtThemSo').value)
  arraAdd.push(ThemSo)
  console.log(arraAdd)
}
document.getElementById('btnCountNumber').onclick = function(){
  debugger
  let inra = CountInteger(arraAdd)
  // document.getElementById('ketQua8').innerHTML = inra
   if(inra ==''){
     document.getElementById('ketQua9').innerHTML = 'Không có'
   }
   else{
     document.getElementById('ketQua9').innerHTML = inra
   }
}
function CountInteger(mang){
  let count = 0
  for(let i=0;i<mang.length;i++){
    if(Number.isInteger(mang[i])){
      count+=1
    }    
  }
  return count
}
const gg = [9,11,-9,8,-8,7,-8,-23]

//Câu 10 So sánh số lương âm và dương
document.getElementById('btnlunisolar').onclick = function(){
  debugger
  let inra = luniso(arra)
  document.getElementById('ketQua10').innerHTML = inra
}
function luniso (mang){
  let am = 0
  let duong = 0
  for(let i = 0;i<=mang.length;i++ ){
    if(mang[i]>0){
      duong+=1
    }
    else if(mang[i]<0){
      am+=1
    }
  }
    if(am<duong){
      return 'Số âm < Số dương'
    }
    else if(am=duong){
      return 'Số âm = Số dương'
    }
    else{
      return 'Số dương > Số âm'
    }
}