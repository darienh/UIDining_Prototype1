
var topLabel = Titanium.UI.createLabel({
	text:'Vandal Dining',
	backgroundColor:'#444444',
	color:'#b18e5f',
	font:{fontSize:25,fontWeight:'Bold',fontFamily:'Calibri'},
	height:'25',
	top:'20',
	width:'100%',
	textAlign:'center',
});

//win3.add(topLabel); COPIED to app.js

var ulabel = Titanium.UI.createLabel({
	text:'Username',
	color:'#444444',
	font:{fontSize:20,fontFamily:'Calibri'},
	height:'20',
	top:'55',
	left:'20',
});

//win3.add(ulabel); COPIED to app.js

var username = Titanium.UI.createTextField({
	hintText:'Enter your Vandal ID',
	font:{fontSize:18,fontFamily:'Calibri'},
	backgroundColor:'#fff',
	borderColor:'#525252',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	height:'20',
	width:'90%',
	top:'80',
	textAlign:'center',	
});

//win3.add(username); COPIED to app.js

var plabel = Titanium.UI.createLabel({
	text:'Password',
	color:'#444444',
	font:{fontSize:20,fontFamily:'Calibri'},
	height:'20',
	top:'105',
	left:'20',
});



var password = Titanium.UI.createTextField({
	hintText:'Enter your password here',
	font:{fontSize:18,fontFamily:'Calibri'},
	backgroundColor:'#fff',
	borderColor:'#525252',
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	keyboardType: Ti.UI.KEYBOARD_DEFAULT,
	height:'20',
	width:'90%',
	top:'130',
	textAlign:'center',	
});



var signin = Ti.UI.createButton({
	title:'Sign In',
	color:'#b18e5f',
	backgroundColor:'#444444',
	font:{fontSize:25,fontWeight:'Bold',fontFamily:'Times New Roman'},
	height:'25',
	width:'35%',
	top:'160',
	textAlign:'center',
});

//win3.add(signin); COPIED to app.js

//win2 changed to winProfile
signin.addEventListener('click', function() {
	//winProfile.open();
	tab3.open(winProfile);
});

var winProfile = Titanium.UI.createWindow({
	title:'Profile',
	backgroundColor:'#fff',
	rightNavButton: signoutBtn
});

var signoutBtn = Ti.UI.createButton({
	title:'Sign Out'
});

var topLabel2 = Titanium.UI.createLabel({
	text:'Vandal Dining',
	backgroundColor:'#444444',
	color:'#b18e5f',
	font:{fontSize:25,fontWeight:'Bold',fontFamily:'Times New Roman'},
	height:'25',
	top:'20',
	width:'100%',
	textAlign:'center'
});

winProfile.add(topLabel2);



var profile = Ti.UI.createImageView({
	image:'/images/profile.jpg',
	top:'67',
	height:'85%',
	width:'100%',
});

winProfile.add(profile);

