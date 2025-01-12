{\rtf1\ansi
{\fonttbl\f0\fnil\fcharset0 .SFUI-Regular;\f1\fnil\fcharset0 .SFArabic-Regular;}
{\colortbl;\red255\green255\blue255;}
\f0\fs32 \cf0 \cb1 \ql\ri8640
try \{\
  const response = JSON.parse\f1 \cb1 (\f0 \cb1 $response.body\f1 \cb1 )\f0 \cb1 ;\
  \
  if \f1 \cb1 (\f0 \cb1 response.data\f1 \cb1 )\f0 \cb1  \{\
    response.data.isPremium = true;\
    response.data.subscriptionStatus = \f1 \cb1 "\f0 \cb1 active\f1 \cb1 "\f0 \cb1 ;\
    \
    $done\f1 \cb1 (\f0 \cb1 \{ body: JSON.stringify\f1 \cb1 (\f0 \cb1 response\f1 \cb1 )\f0 \cb1  \}\f1 \cb1 )\f0 \cb1 ;\
  \} else \{\
    $done\f1 \cb1 (\f0 \cb1 \{\}\f1 \cb1 )\f0 \cb1 ;\
  \}\
\} catch \f1 \cb1 (\f0 \cb1 error\f1 \cb1 )\f0 \cb1  \{\
  console.log\f1 \cb1 ('\cb1 \uc0\u1581 \uc0\u1583 \uc0\u1579 \f0 \cb1  \f1 \cb1 \uc0\u1582 \uc0\u1591 \uc0\u1571 \f0 \cb1 :\f1 \cb1 '\f0 \cb1 , error\f1 \cb1 )\f0 \cb1 ;\
  $done\f1 \cb1 (\f0 \cb1 \{\}\f1 \cb1 )\f0 \cb1 ;\
\}}