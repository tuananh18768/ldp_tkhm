
var collectionSubtitle = document.getElementById("collection-subtitle");
var registerForm = ''
var htmlContent = "<div>";
htmlContent += "<img src='https://bizweb.dktcdn.net/100/438/408/themes/919724/assets/banner2.jpg?1695437188130 '  style='width: 100%;' >";
htmlContent += "<div class='list-coupon'> </div>"
htmlContent += "</div>";

collectionSubtitle.innerHTML = htmlContent
registerForm += `
                        <div class='register_nhan_ma ' style='display: none; top:64px'>
                            <div class='register_content' style='margin: 40px auto'>
                                <div class='img_register'>
                                    <img class='d-none d-lg-block' src='https://bizweb.dktcdn.net/100/438/408/themes/916476/assets/artboard_6.jpg?1695479999362' alt='tram ngan coupon'/>
                                </div>
                                <div class='content_text'>
                                    <div class='content_title'>
                                        <h5>
                                            Nhận Coupon từ YODY
                                        </h5>
                                        <img class='close-qua d-none d-lg-block' src='https://bizweb.dktcdn.net/100/438/408/themes/916476/assets/close.svg?1695479999362' alt='exit'/>
                                    </div>
                                    <p>
                                        Vui lòng nhập thông tin của bạn để nhận voucher giảm giá hấp dẫn từ YODY
                                    </p>
                                    <form class='form_qua_tang' id='form_qua_tang'>
                                        <div class='input_filed'>
                                            <label style='display: block;'>Họ tên (bắt buộc)</label>
                                            <input style='width: 100%;' type='text' name='Họ tên' id='first_name' placeholder='Nhập tên' oninput='inputFormQuaTang()'>
                                            <span class='error-field-username'></span>
                                        </div>
                                        <div class='input_filed'>
                                            <label style='display: block;'>Số điện thoại (bắt buộc)</label>
                                            <input style='width: 100%;' type='text' name='SĐT' id='phone' placeholder='Nhập số điện thoại ' oninput='inputFormQuaTang()'>
                                            <span class='error-field-phone'></span>
                                        </div>
                                        <div class='input_filed'>
                                            <label style='display: block;'>Email</label>
                                            <input style='width: 100%;' type='text' name='Email' id='email' placeholder='Nhập email ' oninput='checkEmail()'>
                                            <span class='error-field-email'></span>
                                        </div>
                                        <input type='hidden' class='utm' name='UTM'>
                                        
                                        <button class='btn_nhan_ma' id='submit_form_qua_tang'>
                                            <span class='text_submit'>Nhận Coupon</span>
                                            <img class='loading_img ' style='display: none; src='https://bizweb.dktcdn.net/100/438/408/themes/916476/assets/loading_dp.gif?1695479999362' alt='loading'/>
                                        </button>
                                    </form>
                                </div>
                                
                            </div>
                        </div>
              `
document.body.innerHTML += registerForm;
var arrayCoupon = [
    {
        id: 1,
        title: 'Coupon 30k',
        des: 'Đơn hàng sản phẩm nguyên giá từ 499.000đ',
        nhanMa: ''
    },
    {
        id: 2,
        title: 'Coupon 50k',
        des: 'Đơn hàng sản phẩm nguyên giá từ 699.000đ',
        nhanMa: ''
    },
    {
        id: 3,
        title: 'Coupon 70k',
        des: 'Đơn hàng sản phẩm nguyên giá từ 799.000đ',
        nhanMa: ''
    }
]

var arrRenderCoupon = []
var arrLocalCoupon = localStorage.getItem('arrayCoupon');
var arrayMaNhan = JSON.parse(arrLocalCoupon)
//var arrRenderCoupon = arrLocalCoupon ? JSON.parse(arrLocalCoupon) : arrayCoupon;

if (arrayMaNhan) {
    for (let i = 0; i < arrayCoupon.length; i++) {
        for (let j = 0; j < arrayMaNhan.length; j++) {
            if (arrayCoupon[i].id === arrayMaNhan[j].id) {
                arrayCoupon[i].nhanMa = 'da_nhan_ma'

            } else {

            }
        }
    }
}
arrRenderCoupon = arrayCoupon;
var listElement = document.querySelector('.list-coupon');
for (var i = 0; i < arrRenderCoupon.length; i++) {
    var listItem = `
                <div class='coupon-item' data-id='${arrRenderCoupon[i].id}'>
                <img src='https://bizweb.dktcdn.net/100/438/408/themes/919724/assets/coupon.svg?1695437188130' style='width: 150px;height: 100%;'/>
                <div class='coupon-text'>
                    <h5 class='coupon-price'>
                        ${arrRenderCoupon[i].title}
                    </h5>
                    <p class='coupon-des'>
                        ${arrRenderCoupon[i].des}
                    </p>
                    <button class='nhan-ma ${arrRenderCoupon[i].nhanMa}'>
                        ${arrRenderCoupon[i].nhanMa === 'da_nhan_ma' ? 'Đã nhận mã' : 'Nhận mã'}
                        <div class='nhan-ma-tiep ' style='display: none;'>
                            <div class='nhan-ma-tiep-content'>
                                <p>Đăng ký nhận mã thành công</p>
                            </div>
                                <span></span>
                        </div>
                    </button>
                </div>
            </div>
                    `
    listElement.innerHTML += listItem;
};

var listMa = document.querySelectorAll('.nhan-ma')
var divMaCoupon;
var titleMa;
var descMa;
var buttonCheckHtml;


for (var i = 0; i < listMa.length; i++) {
    listMa[i].addEventListener('click', function (e) {
        var parent = this.parentElement
        var submenueChild = parent.querySelector('.coupon-price ')
        var desCoupon = parent.querySelector('.coupon-des ')
        divMaCoupon = parent.parentElement.dataset.id
        titleMa = submenueChild.textContent.trim()
        descMa = desCoupon.textContent.trim()
        buttonCheckHtml = parent.querySelector('.nhan-ma ')

        var arrLocalCouponNhan = localStorage.getItem('arrayCoupon');
        var couponParse = arrLocalCouponNhan ? JSON.parse(arrLocalCouponNhan) : [];

        var filterCoupon = arrRenderCoupon.filter(coupon => coupon.nhanMa === 'da_nhan_ma')
        console.log('filterCoupon', filterCoupon)
        if (couponParse.length >= 3) {
            this.disabled = true;
            return
        }
        if (couponParse.length >= 1) {
            buttonCheckHtml.querySelector(".nhan-ma-tiep").style.display = 'block';
            var $formQuaTang = $('#form_qua_tang')
            var dataObj = $formQuaTang.serializeObject()
            dataObj.titleCoupon = titleMa
            dataObj.desCoupon = descMa

            var customerGird = localStorage.getItem('submitGirdTime1');
            var girdSecond = JSON.parse(customerGird);

            if ($('#first_name').val() == '') {
                dataObj['Họ tên'] = girdSecond['Họ tên']
            }
            if ($('#phone').val() == '') {
                dataObj['SĐT'] = girdSecond['SĐT']
            }
            if ($('#email').val() == '') {
                dataObj['Email'] = girdSecond['Email']
            }


            var now = new Date();
            var time = `${now.getHours()}:${now.getMinutes()} ${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}`;
            //$(".time-qua-tang").val(time);
            dataObj['Thời gian'] = time
            submitTracking();
            var jqxhr = $.ajax({
                url: 'https://script.google.com/macros/s/AKfycbzpgAB_XF5W7VJ1CHLUSZAT3e3JUCGARV4KkUu8PciDkCuWQVIif3J2gAJt3WLayiM0QA/exec',
                method: 'GET',
                dataType: 'json',
                data: dataObj,

                success: function (data, textStatus, jqXHR) {
                    $('#form-header .success').fadeIn()



                    if (buttonCheckHtml) {
                        buttonCheckHtml.classList.add('da_nhan_ma')
                        buttonCheckHtml.innerText = 'Đã nhận mã'
                    }

                    var arrLocalCouponNhan = localStorage.getItem('arrayCoupon');
                    var couponParse = JSON.parse(arrLocalCouponNhan)

                    if (arrLocalCouponNhan) {
                        for (let i = 0; i < arrRenderCoupon.length; i++) {
                            if (parseInt(arrRenderCoupon[i].id) == parseInt(divMaCoupon)) {
                                console.log(arrRenderCoupon[i])
                                couponParse.push(arrRenderCoupon[i])
                            }

                        }
                        console.log(couponParse, divMaCoupon)
                        localStorage.setItem('arrayCoupon', JSON.stringify(couponParse));
                    } else {
                        var couponLocal = [];
                        for (let i = 0; i < arrRenderCoupon.length; i++) {
                            if (arrRenderCoupon[i] === divMaCoupon) {
                                couponLocal.push(arrRenderCoupon[i])
                            }
                        }

                        localStorage.setItem('arrayCoupon', JSON.stringify(couponLocal));
                    }

                },
            })
            function submitTracking() {
                fbq('trackCustom', 'signup_promotion_nhan_ma_qr', {
                    email_address: dataObj['Email'],
                    phone_number: dataObj['SĐT'],
                    full_name: dataObj['Họ tên'],
                });
                dataLayer.push({ 'event': 'signup_promotion_nhan_ma_qr' });
                dataLayer.push({
                    'event': 'pangoTrack',
                    'eventAction': 'generate_lead',
                    user_data: {
                        email_address: dataObj['Email'],
                        phone_number: dataObj['SĐT'],
                        address: {
                            first_name: dataObj['Họ tên'],
                            last_name: '',
                            city: '',
                            region: '',
                            postal_code: '',
                            country: ''
                        },
                        'form_key': 'form_qua_tang',
                        'form_name': 'Đăng kí nhận mã khuyến mại',
                        'form_vs': 'coupon',
                        'cf': 'cf_01=' + titleMa + ' || cf_02=' + descMa
                    },
                    'cdpData': {
                        properties: {
                            'gender': '',
                            'birthYear': ''
                        }
                    }
                });
            }
            setTimeout(function () {
                buttonCheckHtml.querySelector('.nhan-ma-tiep').style.display = 'none';
            }, 2000);
        } else {
            document.querySelector('.register_nhan_ma').style.display = 'block';

        }

    })
}
document.querySelector('.close-qua').addEventListener('click', function () {
    document.querySelector('.register_nhan_ma').style.display = 'none';

    document.querySelector('#first_name').value = ''
    document.querySelector('#first_name').classList.remove('error-field')
    document.querySelector('.error-field-username').textContent = ''

    document.querySelector('#phone').value = ''
    document.querySelector('#phone').classList.remove('error-field')
    document.querySelector('.error-field-phone').textContent = ''

    document.querySelector('#email').value = ''
    document.querySelector('.error-field-email').textContent = ''
    document.querySelector('#email').classList.remove('error-field')
})

function inputFormQuaTang() {
    if (document.querySelector('#first_name').value.trim() == '') {
        document.querySelector('#first_name').classList.add('error-field')
        document.querySelector('.error-field-username').textContent = 'Vui lòng nhập họ và tên';
        flag = false
    } else {
        document.querySelector('#first_name').classList.add('error-field')
        document.querySelector('.error-field-username').textContent = ''
        flag = true
    }
    if (document.querySelector('#phone').value == '') {
        document.querySelector('#phone').classList.add('error-field')
        document.querySelector('.error-field-phone').textContent = 'Vui lòng nhập số điện thoại';
        flag = false
    } else {
        document.querySelector('#phone').classList.remove('error-field')
        classList('.error-field-phone').textContent = ''
        flag = true
    }
    if (!flag) return

    if (!checkphone($('input#phone').value)) {
        document.querySelector('#phone').classList.add('error-field')
        document.querySelector('.error-field-phone').textContent = 'Vui lòng nhập số điện thoại hợp lệ';
        return
    } else {
        document.querySelector('#phone').classList.remove('error-field')
        document.querySelector('.error-field-phone').textContent = '';
    }



}
function checkEmail() {
    if (!pattern.test(document.querySelector("#email").value.trim()) && document.querySelector("#email").value.trim()) {
        document.querySelector(".error-field-email").textContent = 'Email không đúng định dạng';
        document.querySelector("#email").classList.add('error-field')
        return;
    } else {
        document.querySelector(".error-field-email").textContent = '';
        document.querySelector("#email").classList.remove('error-field')
    }
}
function checkphone(phone) {
    var pattern = /((09|03|07|08|05|296|254|209|204|291|222|275|256|274|271|252|290|292|206|236|262|261|215|251|277|269|219|226|24|239|220|225|293|28|218|221|258|297|260|213|263|205|214|272|228|238|229|259|210|257|232|235|255|203|233|299|212|276|227|208|237|234|273|294|207|270|211|216)+([0-9]{8})\b)/g;
    if (phone.match(pattern)) { return true; } else { return false; }
}
