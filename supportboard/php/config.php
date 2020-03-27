<?php
/**
 * ======================================
 * SUPPORT BOARD - CONFIG FILE
 * ======================================
 *
 * From this file you can set all the settings of the plugin.
 * Documentation at board.support/docs/php
 */

$sb_config_mysql = array(
    'host' => '127.0.0.1:3307',
    'username' => 'root',
    'password' => '',
    'db' => 'test',
);

$sb_config = array(
 'color-main' => '#A54A99',
 'color-secondary' => '#FDCF22',
 'font-disable' => false,
 'rtl' => false,
 'auto-multilingual' => false,
 'agent-subtitle' => 'Solicitá tu préstamo en la mano.',
 'desk-login' => true,
 'user-extra-1' => '',
 'user-extra-2' => '',
 'user-extra-3' => '',
 'user-extra-4' => '',
 'user-email' => true,
 'username-type' => 'email', //email,username
 'user-img' => true,
 'scrollbox-active' => true,
 'scrollbox-height' => 'fullscreen', //integer or "fullscreen"
 'scrollbox-offset' => '0',
 'scrollbox-options' => '',
 'hide-message-time' => false,
 'width' => '',
 'notify-agent-email' => true,
 'notify-user-email' => true,
 'push-notifications' => 'all', //all(default),users,agents
 'flash-notifications' => true,
 'flash-notifications-text' => '',
 'hide-chat-time' => true,
 'chat-visibility' => '', //all(default),logged
 'chat-sound' => true,
 'chat-avatars' => true,
 'welcome-active' => true,
 'welcome-always' => true,
 'welcome-msg' => 'Bienvenid@! Soy el BOT de Préstamos en la Mano. Escribé &quot;Hola&quot; para comenzar.',
 'welcome-img' => 'https://finanzas.com.uy/wp-content/uploads/2019/12/Financialmos-en-la-mano-400.jpg',
 'welcome-closed' => false,
 'follow-active' => false,
 'follow-msg' => '',
 'follow-fb' => '',
 'follow-wa' => '',
 'chat-title' => 'BOT de Préstamos en la Mano',
 'chat-header' => 'Solocitá tu préstamo a través del BOT.',
 'chat-header-avatars' => true,
 'chat-header-type' => 'brand', //agents(default), brand
 'chat-brand-img' => 'https://finanzas.com.uy/wp-content/uploads/2020/03/pine3.png',
 'chat-header-img' => 'https://finanzas.com.uy/wp-content/uploads/2020/03/back.jpg',
 'chat-icon' => '',
 'slack-active' => false,
 'slack-token' => '',
 'slack-channel' => '',
 'bot-active' => true,
 'sb-dialogflow-project-id' => 'Financialmosv5-prkliy',
 'bot-lan' => 'es',
 'bot-name' => 'FinancialmosV5',
 'refresh-token' => '1//03RuwhJfi2O54CgYIARAAGAMSNwF-L9IrYvWOigs4vRwavUdx_iq85q6RkB7sM_Z4NIoqa0V8nB3HhbwZW_OxnQEYMLsGF4pRopw', 
 'bot-img' => ''
 /*'refresh-token' => '1//03RuwhJfi2O54CgYIARAAGAMSNwF-L9IrYvWOigs4vRwavUdx_iq85q6RkB7sM_Z4NIoqa0V8nB3HhbwZW_OxnQEYMLsGF4pRopw', 
 'sb-dialogflow-project-id' => 'Financialmosv5-prkliy',
 'bot-lan' => 'es',
 'bot-name' => 'ChatBot',
 'bot-img' => ''*/
);

$sb_config_email = array(
    'host' => '',
    'username' => '',
    'password' => '',
    'port' => '465',
    'SMTPSecure' => 'ssl',
    'email_from' => '',
    'email_subject_users' => '',
    'email_content_users' => '',
    'email_subject_agents' => '',
    'email_content_agents' => '',
);

?>
