{\rtf1\ansi
{\fonttbl\f0\fnil\fcharset0 .SFUI-Regular;\f1\fnil\fcharset0 .SFArabic-Regular;}
{\colortbl;\red255\green255\blue255;}
\f0\fs32 \cf0 \cb1 \ql\ri8640
var obj = JSON.parse\f1 \cb1 (\f0 \cb1 $response.body\f1 \cb1 )\f0 \cb1 ;\
\
obj = \{\
  \f1 \cb1 "\f0 \cb1 code\f1 \cb1 "\f0 \cb1 : 200,\
  \f1 \cb1 "\f0 \cb1 data\f1 \cb1 "\f0 \cb1 : \{\
    \f1 \cb1 "\f0 \cb1 vip\f1 \cb1 "\f0 \cb1 : true,\
    \f1 \cb1 "\f0 \cb1 vipEndDate\f1 \cb1 "\f0 \cb1 : \f1 \cb1 "\f0 \cb1 2099-12-31\f1 \cb1 "\f0 \cb1 ,\
    \f1 \cb1 "\f0 \cb1 memberStatus\f1 \cb1 "\f0 \cb1 : \f1 \cb1 "\f0 \cb1 active\f1 \cb1 "\f0 \cb1 ,\
    \f1 \cb1 "\f0 \cb1 vipType\f1 \cb1 "\f0 \cb1 : \f1 \cb1 "\f0 \cb1 premium\f1 \cb1 "\f0 \cb1 ,\
    \f1 \cb1 "\f0 \cb1 subscriptionStatus\f1 \cb1 "\f0 \cb1 : \f1 \cb1 "\f0 \cb1 active\f1 \cb1 "\f0 \cb1 ,\
    \f1 \cb1 "\f0 \cb1 subscriptionPlanId\f1 \cb1 "\f0 \cb1 : \f1 \cb1 "\f0 \cb1 premium_yearly\f1 \cb1 "\f0 \cb1 ,\
    \f1 \cb1 "\f0 \cb1 features\f1 \cb1 "\f0 \cb1 : \{\
      \f1 \cb1 "\f0 \cb1 convert\f1 \cb1 "\f0 \cb1 : true,\
      \f1 \cb1 "\f0 \cb1 edit\f1 \cb1 "\f0 \cb1 : true,\
      \f1 \cb1 "\f0 \cb1 merge\f1 \cb1 "\f0 \cb1 : true,\
      \f1 \cb1 "\f0 \cb1 organize\f1 \cb1 "\f0 \cb1 : true,\
      \f1 \cb1 "\f0 \cb1 protect\f1 \cb1 "\f0 \cb1 : true,\
      \f1 \cb1 "\f0 \cb1 sign\f1 \cb1 "\f0 \cb1 : true,\
      \f1 \cb1 "\f0 \cb1 unlock\f1 \cb1 "\f0 \cb1 : true\
    \}\
  \},\
  \f1 \cb1 "\f0 \cb1 message\f1 \cb1 "\f0 \cb1 : \f1 \cb1 "\f0 \cb1 success\f1 \cb1 "\f0 \cb1 \
\};\
\
$done\f1 \cb1 (\f0 \cb1 \{body: JSON.stringify\f1 \cb1 (\f0 \cb1 obj\f1 \cb1 )\f0 \cb1 \}\f1 \cb1 )\f0 \cb1 ;}