export default {
    translation: {
      Login: {
        Title: "登陆以继续",
        Username_or_Email: "用户名或邮箱",
        Password: "密码",
        Login_Button: "登录",
        Forgot_Password: "忘记密码？",
        Username_or_Email_Desc: "您必须输入一个用户名或邮箱。",
        Account_Password_Desc: "请输入您的账户密码。",
        Account_Incorrect: "找不到对应的账户。",
        Many_Attempts: "当前尝试登陆次数过多，请稍后再试。",
        Recaptcha_Error: "无法验证 reCAPTCHA 数据。",
        Request_Failed: "请求失败错误代码404",
        CSRF_Token: "CSRF token 不匹配。"
      },
      Reset_Password: {
        Password_Reset: "请求重置密码",
        Email: "邮箱",
        New_Password_Required: "需要一个新的密码。",
        Password_Characters_Min: "你的密码长度至少需要8位。",
        Password_Not_Match: "您的新密码不匹配。",
        Account_Email: "输入您的电子邮件地址以获得重置密码的方法。",
        Valid_Email: "必须提供一个合法的电子邮件以继续。",
        Send_Email: "发送邮件",
        Return_to_Login: "返回以登录",
        Reset_Password: "重置密码",
        New_Password: "新密码",
        New_Password_Desc: "密码长度至少需要8位。",
        Confirm_New_Password: "确认新密码",
        Send_Email_Link: "我们已经向您的邮箱发送了重置密码链接！"
      },
      Two_Factor_Auth: {
        Device_Checkpoint: "设备检查点",
        Recovery_Code: "恢复代码",
        Authentication_Code: "验证码",
        Enter_Two_Factor_Desc_1: "输入由您的设备生成的二次身份验证token",
        Enter_Two_Factor_Desc_2: "输入一个当你在这个账户设置二次身份验证时生成的恢复代码以继续。",
        Lost_Device: "我丢失了我的设备",
        Have_Device: "我找得到我的设备",
        Continue: "继续"
      },
      Account_Overview: {
        Two_Factor_Activate_Desc_1: "您必须提供一个验证码以继续。",
        Two_Factor_Activate_Desc_2: "二次身份验证目前已经在您的账户上启用。",
        Two_Factor_Activate_Desc_3: "验证码必须是6位数字。",
        Two_Factor_Active_Title: "已启用二次身份验证",
        Two_Factor_Active_Desc_1: "二次身份验证已经在您的账户上启用。如果您无法访问您的身份验证设备，您需要使用下面显示的代码之一来访问您的帐户。",
        Two_Factor_Active_Desc_2: "这个代码不会被再次显示。",
        Two_Factor_Active_Desc_3: "请立即记下它们，并且将它们保存在安全都位置（例如密码管理器）。",
        Two_Factor_Active_Button: "关闭",
        Two_Factor_Disabled_Desc: "您的账户目前没有启用二次身份验证。点击下方的按钮来配置他。",
        Two_Factor_Disable_Desc_1: "您必须提供当前的密码以继续。",
        Two_Factor_Disable_Desc_2: "关闭二次身份验证需要提供您账户当前的密码。",
        Two_Factor_Disable_Title: "当前密码",
        Two_Factor_Disable_Button: "关闭二次身份验证",
        Two_Factor_Setup_Desc_1: "在扫描二维码图像后输入由您的验证设备提供的代码。",
        Two_Factor_Setup_Desc_2: "或者，在您的身份验证器应用程序中输入以下token：",
        Two_Factor_Setup_Button: "设定",
        Two_Factor_Incorrect_Password: "提供的密码无效。",
        Button_Disable: "禁用",
        Button_Enable: "启用",
        Create_Api_Desc_Title: "备注描述",
        Create_Api_Desc: "一个对此API key的描述备注。",
        Create_Api_Ips_Title: "允许放行的IP",
        Create_Api_Ips_Desc: "留空以允许任意IP使用此API key,或者每行输入一个放行的IP。",
        Create_Api_Button: "创建",
        Update_Email_Desc_1: "您必须提供当前的账户密码。",
        Update_Email_Required: "必须填写邮箱",
        Update_Email_Success_Title: "成功",
        Update_Email_Success: "您的主邮箱已更新。",
        Update_Email_Error_Title: "错误",
        Update_Email_Button: "更新邮箱",
        Update_Password_Title: "新密码",
        Update_Password_Desc_1: "您必须提供当前的密码。",
        Update_Password_Desc_2: "密码与您先前输入的不一致。",
        Update_Password_Desc_3: "您的新密码长度应至少是8位，而且仅在该网站使用。",
        Update_Password_Required: "必须填写密码",
        Update_Password_Button: "更新密码",
        Update_Password_Error: "您输入的密码对此账户无效。",
        Update_Password_Min: "密码至少需要8个字符",
        Confirm_Password: "确认密码",
        Account_Page_Title: "账户概览",
        Account_Two_Factor_Required_Title: "需要二次身份验证",
        Account_Two_Factor_Required_Desc: "您的账户必须开启二次身份验证以继续。",
        Account_Update_Email_Title: "更新电子邮件地址",
        Account_Setup_Two_Factor_Title: "配置二次身份验证",
        Api_Page_Title: "账户API",
        Api_Create_Title: "创建API Key",
        Api_List_Title: "API Keys",
        Api_List_Loading: "加载中...",
        Api_List_Empty: "这个账户目前没有API keys",
        Api_List_Used_1: "上一次使用: ",
        Api_List_Used_2: "从未使用",
        Api_Delete_Title: "确认要删除的key",
        Api_Delete_Button: "是，删除这个key",
        Api_Delete_Desc: "您确定您要删除这个API key吗？所有使用这个API key的请求都将立刻失效。",
        Api_Setup_Title: "您的API Key",
        Api_Setup_Desc: "您请求的API key如下所示。请将其保存在安全的地方，API key不会再次显示。",
        Api_Min_Characters: "描述需要至少4个字符",
        Api_Setup_Button: "关闭",
        Api_Ip_Incorrect_1: "IP地址1必须是一个有效的IP地址。",
        Api_Ip_Incorrect_2: "IP地址2必须是一个有效的IP地址。",
        Api_Ip_Incorrect_3: "IP地址3必须是一个有效的IP地址。"
      },
      Search: {
        Search_Title: "搜索项目",
        Search_Desc_1: "请输入至少3个字符开始搜索。",
        Search_Desc_2: "请输入服务器名称，uuid，或者分配开始搜索。"
      },
      Dashboard: {
        Dash_Page_Title: "控制面板",
        Dash_Show_Server_1: "显示其他人的服务器",
        Dash_Show_Server_2: "显示您的服务器",
        Dash_Show_Server_3: "没有其他服务器可供显示。",
        Dash_Show_Server_4: "没有其他服务器关联到您的账户。"
      },
      Server_Row: {
        Server_Unlimited: "无限制的",
        Server_Suspended: "暂停中",
        Server_Connect_Error: "连接错误",
        Server_Transferring: "迁移中",
        Server_Installing: "安装中",
        Server_Restoring_Backup: "恢复备份中",
        Server_Unavailable: "不可用的",
        Server_Of: "of"
      },
      Elements: {
        Elements_Cancel_Button: "取消",
        Elements_Copy_Text: "复制到剪贴板。",
        Elements_Error: "应用程序呈现此视图时遇到了一个错误。尝试刷新页面。"
      },
      Server: {
        Server_Page_Title: "控制台",
        Server_Transfer_Console: "迁移失败。",
        Server_Archived_Console: "服务器已成功压缩，正在尝试连接到目标节点..",
        Server_Send_Command: "输入指令...",
        Server_State_Console: "服务器创建为",
        Server_State_Starting: "启动中",
        Server_State_Offline: "离线中",
        Server_State_Stopping: "停止中",
        Server_State_Running: "运行中",
        Server_State_Connect: "正在连接...",
        Server_State_Install: "此服务器当前正在运行安装程序，此时绝大部分操作不可用。",
        Server_State_Transfer: "此服务器当前正在迁移到另一个节点，此时所有操作不可用。",
        Server_Button_Start: "启动",
        Server_Button_Restart: "重启",
        Server_Button_Kill: "强制停止",
        Server_Button_Stop: "停止",
        Server_Memory_Graph_Title: "内存使用量",
        Server_Cpu_Graph_Title: "CPU使用量",
        Server_Graph_Desc: "服务器离线。",
        Server_Websocket_Error: "验证由websocket提供的凭据时出错。请刷新页面。",
        Server_Connect_Server: "我们在连接到您的服务器时出现了一些问题，请等待..."
      },
      Server_Backup: {
        Backup_Page_Title: "备份",
        Backup_Empty_1: "看起来我们已经展示了所有备份给您，尝试回到上一个页面。",
        Backup_Empty_2: "看起来您当前没有在这个服务器储存任何备份。",
        Backup_Forbidden: "无法为此服务器创建备份，因为备份限制设置为0。",
        Backup_Information: "已为此服务器创建备份。",
        Backup_Create_Title_1: "创建服务器备份",
        Backup_Create_Title_2: "备份名",
        Backup_Create_Title_3: "忽略的文件和目录",
        Backup_Create_Title_4: "锁定",
        Backup_Create_Desc_1: "如果输入，这个名字会被用于这个备份。",
        Backup_Create_Desc_2: "输入生成此备份时要忽略的文件或文件夹。留空使用在服务器根目录的.pteroignore文件的目录（如果存在）。除了通过在路径前添加感叹号来否定规则之外，还支持文件和文件夹的通配符匹配。",
        Backup_Create_Desc_3: "在这个备份被解锁前，阻止它被删除。",
        Backup_Create_Start_Button: "开始备份",
        Backup_Create_Button: "创建备份",
        Backup_Created_Title: "解锁这个备份？",
        Backup_Created_Desc_1: "您确定要解锁这个备份吗？它将不再被保护以被防止自动或意外删除。",
        Backup_Created_Button: "是，解锁",
        Backup_Restore_Title: "恢复这个备份？",
        Backup_Restore_Desc_1: "这个服务器将会停止以恢复备份。一旦开始备份，您将无法控制服务器电源状态，访问文件管理器，或者创建额外的备份直到它完成。",
        Backup_Restore_Desc_2: "您确定想要继续吗？",
        Backup_Restore_Desc_3: "在恢复此备份之前删除所有文件和文件夹。",
        Backup_Restore_Button: "恢复备份",
        Backup_Delete_Title: "删除这个备份？",
        Backup_Delete_Desc_1: "您确定想要删除这个备份吗？这是一个永久性操作，一旦删除这个备份无法被恢复。",
        Backup_Delete_Button: "是，删除这个备份",
        Backup_SubMenu_Download: "下载",
        Backup_SubMenu_Restore: "恢复",
        Backup_SubMenu_Unlock: "解锁",
        Backup_SubMenu_Lock: "锁定",
        Backup_SubMenu_Delete: "删除"
      },
      Server_Databases: {
        Database_Page_Title: "数据库",
        Database_Show_Empty: "看起来您没有任何数据库。",
        Database_Show_Forbidden: "无法为此服务器创建数据库。",
        Database_Limit_Desc: "数据库已分配给此服务器。",
        Database_Create_Title_1: "创建新数据库",
        Database_Create_Title_2: "数据库名称",
        Database_Create_Title_3: "连接来自",
        Database_Create_Desc_1: "一个对此数据库实例的描述。",
        Database_Create_Desc_2: "允许连接的位置。使用 % 作为通配符。",
        Database_Create_Button_1: "创建数据库",
        Database_Create_Button_2: "新数据库",
        Database_Create_Error_1: "处理此请求时遇到意外错误，请重试。",
        Database_Create_Error_2: "必须提供一个数据库名称。",
        Database_Create_Error_3: "数据库名称至少需要3个字符。",
        Database_Create_Error_4: "数据库名称不能超出48个字符。",
        Database_Create_Error_5: "数据库名称应仅包含字母数字字符、下划线、破折号和/或句点。",
        Database_Create_Error_6: "必须提供连接值。",
        Database_Create_Error_7: "必须提供一个有效的连接地址。",
        Database_Delete_Title_1: "确认删除数据库",
        Database_Delete_Title_2: "确认数据库名称",
        Database_Delete_Title_3: "数据库连接详情",
        Database_Delete_Title_4: "端点",
        Database_Delete_Title_5: "连接来自",
        Database_Delete_Title_6: "用户名",
        Database_Delete_Title_7: "密码",
        Database_Delete_Title_8: "JDBC Connection String",
        Database_Rotate_Button: "替换密码",
        Database_Delete_Desc_1: `删除数据库是一项永久性操作，不能被撤销。这将永久删除"{{database}}"数据库并且删除所有相关数据。`,
        Database_Create_Desc_2: "输入数据库名称以确认删除。",
        Database_Delete_Button: "删除数据库",
        Database_Delete_Error_1: "必须提供数据库名称。",
        Database_Delete_Error_2: "没有找到满足此服务器要求的数据库主机。"
      },
      Server_Files: {
        Files_Page_Title: "文件管理器",
        Files_Create_Button: "新建文件",
        Files_Directory_Empty: "这个目录看起来是空的。",
        Files_Show_Files_Max: "这个目录过大无法在浏览器中完整显示，将仅显示前250个文件。",
        Files_Chmod_Title: "文件模式",
        Files_Chmod_Button: "上传",
        Files_Delete_File_Or_Directory_Title: "删除这个",
        Files_Delete_File_Or_Directory_Button: "是，删除",
        Files_Delete_File_Or_Directory_Desc: "文件删除是一项永久性操作，您不能撤销这个操作。",
        Files_Delete_File: "文件",
        Files_Delete_Directory: "目录",
        Files_Delete_Title: "删除这些文件？",
        Files_Delete_Desc_1: "您确定想要删除{{selected}}文件？",
        Files_Delete_Desc_2: "删除下方列出的文件是一项永久性操作，您不能撤销这个操作。",
        Files_Delete_Desc_3: "其他",
        Files_Delete_Button: "是，删除文件",
        Files_SubMenu_Rename: "重命名",
        Files_SubMenu_Move: "移动",
        Files_SubMenu_Permissions: "权限",
        Files_SubMenu_Copy: "复制",
        Files_SubMenu_Archive: "压缩",
        Files_SubMenu_Unarchive: "解压缩",
        Files_SubMenu_Download: "下载",
        Files_SubMenu_Delete: "删除",
        Files_Edit_Ptero_Ignore_1: "您正在编辑一个",
        Files_Edit_Ptero_Ignore_2: "文件。此处列出的任何文件或目录都将从备份中排除。支持通过星号使用通配符",
        Files_Edit_Ptero_Ignore_3: "您可以通过在句子前面加上感叹号来使规则失效",
        Files_Edit_Save_Button: "保存更改",
        Files_Create_Title: "文件名称",
        Files_Create_Desc: "输入这个文件应该被保存为的名称。",
        Files_Create_Error: "文件名是必填字段",
        Files_Create_Button: "新建文件",
        Files_Message_Archiving: "压缩文件...",
        Files_Message_Deleting: "删除文件...",
        Files_Create_Directory_Title: "目录名称",
        Files_Create_Directory_Desc_1: "必须提供有效的目录名称。",
        Files_Create_Directory_Desc_2: "该目录将被创建为",
        Files_Create_Directory_Button: "新建目录",
        Files_Move_Desc_1: "输入这个文件或文件夹的新名称和路径，相对于当前目录。",
        Files_Move_Desc_2: "新位置：",
        Files_Drag_Desc: "拖放文件以上传。",
        Files_Drag_Button: "上传",
        Files_Error_1: "需要文件名。",
        Files_Error_2: "远程主机上发生错误：无法移动或重命名文件，目标已存在.."
      },
      Server_Users: {
        User_Page_Title: "用户",
        User_Sub_Users_Empty: "您似乎没有任何子用户。",
        User_Create_Title_1: "创建新子用户",
        User_Create_Title_2: "用户邮箱",
        User_Create_Sub_User_Desc_1: "输入您希望邀请作为此服务器子用户的用户的电子邮件地址。",
        User_Create_Sub_User_Desc_2: "电子邮件地址不得超过 191 个字符。",
        User_Create_Sub_User_Desc_3: "必须提供有效的电子邮件地址。",
        User_Modify_Or_View_Email_Title: "给{{subuser}}的权限",
        User_Modify_Title: "Modify",
        User_View_Title: "查看",
        User_Modify_Button: "保存",
        User_Create_Button_1: "邀请用户",
        User_Create_Button_2: "新用户",
        User_Create_Sub_User_Desc: "在创建或修改其他用户时，只能选择您的帐户当前分配的权限。",
        User_Delete_Title: "删除这个子用户？",
        User_Delete_Desc_1: "您确定要删除这个子用户吗？他们将会被立即撤销对该服务器的所有访问权限。",
        User_Delete_Button: "是，删除子用户",
        User_Show_2FA: "已启用二次身份验证",
        User_Show_Permissions: "权限",
        User_Create_Sub_Title_1: "Control",
        User_Create_Sub_Title_2: "用户",
        User_Create_Sub_Title_3: "文件",
        User_Create_Sub_Title_4: "备份",
        User_Create_Sub_Title_5: "Allocation",
        User_Create_Sub_Title_6: "启动项",
        User_Create_Sub_Title_7: "数据库",
        User_Create_Sub_Title_8: "计划任务",
        User_Create_Sub_Title_9: "设置",
        User_Create_Desc_1: "允许用户控制服务器电源状态或使用命令。",
        User_Create_Desc_2: "允许用户管理服务器上的其他子用户。 他们永远无法编辑自己的帐户，或分配自己没有的权限。",
        User_Create_Desc_3: "允许控制用户修改此服务器的文件系统的权限。",
        User_Create_Desc_4: "允许控制用户生成和管理服务器备份的权限。",
        User_Create_Desc_5: "允许控制用户修改此服务器分配的端口的权限。",
        User_Create_Desc_6: "允许控制用户查看此服务器启动参数的权限。",
        User_Create_Desc_7: "允许控制用户访问此服务器的数据库管理的权限。",
        User_Create_Desc_8: "允许控制用户访问该服务器计划任务的权限。",
        User_Create_Desc_9: "允许控制用户访问此服务器设置的权限。",
        User_Create_Option_Desc_1: "控制台",
        User_Create_Option_Desc_2: "启动",
        User_Create_Option_Desc_3: "停止",
        User_Create_Option_Desc_4: "重启",
        User_Create_Option_Desc_5: "创建",
        User_Create_Option_Desc_6: "读取",
        User_Create_Option_Desc_7: "上传",
        User_Create_Option_Desc_8: "删除",
        User_Create_Option_Desc_9: "读取内容",
        User_Create_Option_Desc_10: "压缩",
        User_Create_Option_Desc_11: "SFTP",
        User_Create_Option_Desc_12: "下载",
        User_Create_Option_Desc_13: "恢复",
        User_Create_Option_Desc_14: "Docker镜像",
        User_Create_Option_Desc_15: "查看密码",
        User_Create_Option_Desc_16: "重命名",
        User_Create_Option_Desc_17: "重新安装",
        User_Create_Option_Description_1: "允许用户通过控制台向服务器实例发送命令。",
        User_Create_Option_Description_2: "允许用户在服务器停止时启动它。",
        User_Create_Option_Description_3: "允许用户停止正在运行的服务器。",
        User_Create_Option_Description_4: "允许用户执行服务器重启。 这允许他们在脱机时启动服务器，但不会将服务器置于完全停止状态。",
        User_Create_Option_Description_5: "允许用户为服务器创建新的子用户。",
        User_Create_Option_Description_6: "允许用户查看子用户及其对服务器的权限。",
        User_Create_Option_Description_7: "允许用户修改其他子用户。",
        User_Create_Option_Description_8: "允许用户从服务器中删除子用户。",
        User_Create_Option_Description_9: "允许用户通过面板或直接上传创建其他文件和文件夹。",
        User_Create_Option_Description_10: "允许用户查看目录的内容，但不能查看或下载文件的内容。",
        User_Create_Option_Description_11: "允许用户查看给定文件的内容。 这也将允许用户下载文件。",
        User_Create_Option_Description_12: "允许用户更新现有文件或目录的内容。",
        User_Create_Option_Description_13: "允许用户删除文件或目录。",
        User_Create_Option_Description_14: "允许用户压缩目录的内容以及解压缩系统上的现有档案。",
        User_Create_Option_Description_15: "允许用户连接到 SFTP 并使用其他文件管理器管理服务器文件。",
        User_Create_Option_Description_16: "允许用户为此服务器创建新备份。",
        User_Create_Option_Description_17: "允许用户查看此服务器存在的所有备份。",
        User_Create_Option_Description_18: "允许用户从系统中删除备份。",
        User_Create_Option_Description_19: "允许用户下载服务器的备份。警告：这允许用户访问服务器备份中的所有文件。",
        User_Create_Option_Description_20: "允许用户从备份恢复服务器。警告：这允许用户在此过程中删除所有服务器文件。",
        User_Create_Option_Description_21: "Allows a user to view all allocations currently assigned to this server. Users with any level of access to this server can always view the primary allocation.",
        User_Create_Option_Description_22: "Allows a user to assign additional allocations to the server.",
        User_Create_Option_Description_23: "Allows a user to change the primary server allocation and attach notes to each allocation.",
        User_Create_Option_Description_24: "Allows a user to delete an allocation from the server.",
        User_Create_Option_Description_25: "允许用户查看服务器的启动变量。",
        User_Create_Option_Description_26: "允许用户修改服务器的启动变量。",
        User_Create_Option_Description_27: "允许用户修改运行服务器时使用的 Docker 镜像。",
        User_Create_Option_Description_28: "允许用户为此服务器创建新数据库。",
        User_Create_Option_Description_29: "允许用户查看与该服务器相关联的数据库。",
        User_Create_Option_Description_30: "允许用户替换数据库实例的密码。如果用户没有查看密码权限，他们将看不到更新的密码。",
        User_Create_Option_Description_31: "允许用户从此服务器中删除数据库实例。",
        User_Create_Option_Description_32: "允许用户查看与该服务器的数据库实例相关联的密码。",
        User_Create_Option_Description_33: "允许用户为此服务器创建新计划任务。",
        User_Create_Option_Description_34: "允许用户查看此服务器的计划任务。",
        User_Create_Option_Description_35: "允许用户更新此服务器的计划任务。",
        User_Create_Option_Description_36: "允许用户删除此服务器的计划任务。",
        User_Create_Option_Description_37: "允许用户重命名此服务器。",
        User_Create_Option_Description_38: "允许用户重新安装此服务器。"
      },
      Server_Network: {
        Network_Page_Title: "网络",
        Network_Alocations_Desc_1: "You are currently using {{data}} of {{limit}} allowed allocations for this server.",
        Network_Create_Alocation_Button: "Create Allocation",
        Network_Hostname: "主机名",
        Network_IP_Address: "IP地址",
        Network_Port: "端口",
        Network_Notes: "备注",
        Network_Primary: "Primary",
        Network_Primary_Button: "Make Primary",
        Network_Delete_Title: "删除此分配？",
        Network_Delete_Button: "删除",
        Network_Delete_Desc_1: "This allocation will be immediately removed from your server. Are you sure you want to continue?",
        Network_Error_1: "Server auto-allocation is not enabled for this instance.",
      },
      Server_Schedules: {
        Task_Page_Title: "计划任务",
        Task_Empty_Message: "没有为此服务器配置计划任务。",
        Task_Create_Button: "创建计划任务",
        Task_Edit_Button: "保存更改",
        Task_Delete_Title: "删除计划任务？",
        Task_Delete_Button_1: "是，删除计划任务",
        Task_Delete_Desc: "您确定要删除此计划任务吗？ 所有任务都将被删除，任何正在运行的进程都将终止。",
        Task_Delete_Button_2: "删除",
        Task_Create_Title: "创建新计划任务",
        Task_Edit_Title: "编辑计划任务",
        Task_Create_Or_Edit_Title_1: "计划任务名称",
        Task_Create_Or_Edit_Title_2: "仅当服务器在线时",
        Task_Create_Or_Edit_Title_3: "启用计划任务",
        Task_Create_Or_Edit_Desc_1: "此计划任务的人类可读标识符。",
        Task_Create_Or_Edit_Desc_2: "计划任务系统支持在定义任务何时开始运行时使用 Cronjob 语法。 使用上述字段指定这些任务应何时开始运行。",
        Task_Create_Or_Edit_Desc_3: "仅在服务器处于运行状态时执行此计划任务。",
        Task_Create_Or_Edit_Desc_4: "这个计划任务将在启用时自动执行。",
        Task_Create_Or_Edit_Minute: "分钟",
        Task_Create_Or_Edit_Hour: "小时",
        Task_Create_Or_Edit_Day_Of_Month: "一个月中的第多少日",
        Task_Create_Or_Edit_Month: "月",
        Task_Create_Or_Edit_Day_Of_Week: "一个星期中的第多少日",
        Task_New_Task_Button: "新任务",
        Task_Run_Task_Button: "现在运行",
        Task_Cron_Row_Minute: "分钟",
        Task_Cron_Row_Hour: "小时",
        Task_Cron_Row_Day_Month: "日（月）",
        Task_Cron_Row_Month: "月",
        Task_Cron_Row_Day_Week: "日（星期）",
        Task_Task_Page_Title: "任务",
        Task_Task_Processing: "执行中",
        Task_Task_Last_Run: "上一次运行时间：",
        Task_Task_Next_Run: "下一次运行时间：",
        Task_Task_Never: "永不",
        Task_Task_NA: "n/a",
        Task_Task_Edit_Button: "编辑",
        Task_Task_Active: "可用的",
        Task_Task_Inactive: "不可用的",
        Task_Task_Delete_Title: "确认删除任务",
        Task_Task_Delete_Button: "删除任务",
        Task_Task_Delete_Desc: "您确定要删除此任务吗？ 此操作无法撤消。",
        Task_Task_Files_And_Folders_Message: "忽略文件和文件夹：",
        Task_Task_Continue_Message: "失败后继续",
        Task_Task_Time_Message: "{{time}}过后",
        Task_Task_Edit_Title: "编辑任务",
        Task_Task_Create_Title: "创建任务",
        Task_Task_Create_Or_Edit_Command: "发送命令",
        Task_Task_Create_Or_Edit_Power: "发送电源操作",
        Task_Task_Create_Or_Edit_Backup: "创建备份",
        Task_Task_Create_Or_Edit_Title_1: "时间偏移值（秒）",
        Task_Task_Create_Or_Edit_Title_2: "负载",
        Task_Task_Create_Or_Edit_Title_3: "忽略的文件",
        Task_Task_Create_Or_Edit_Title_4: "失败后继续",
        Task_Task_Create_Or_Edit_Title_5: "操作",
        Task_Task_Create_Or_Edit_Desc_1: "上一个任务执行后，在运行此任务之前等待的时间。如果这是计划中的第一个任务，则不会等待。",
        Task_Task_Create_Or_Edit_Desc_2: "可选项。包括要在此备份中排除的文件和文件夹。默认使用 .pteroignore 文件的内容。如果您已达到备份限制，则将替换最早的备份。",
        Task_Task_Create_Or_Edit_Desc_3: "当此任务失败时，将运行接下来的任务。",
        Task_Task_Create_Or_Edit_Option_1: "启动服务器",
        Task_Task_Create_Or_Edit_Option_2: "重启服务器",
        Task_Task_Create_Or_Edit_Option_3: "停止服务器",
        Task_Task_Create_Or_Edit_Option_4: "终止服务器",
        Task_Task_Create_Or_Edit_Error_1: "必须提供任务负载。",
        Task_Task_Create_Or_Edit_Error_2: "时间偏移值必须是 0 到 900 之间的有效数字。",
        Task_Task_Create_Or_Edit_Error_3: "必须提供时间偏移值。",
        Task_Task_Create_Or_Edit_Error_4: "时间偏移值必须至少为 0 秒。",
        Task_Task_Create_Or_Edit_Error_5: "时间偏移值必须小于 900 秒。",
        Task_Task_Create_Or_Edit_Error_6: "当服务器的备份限制设置为 0 时，无法创建备份任务。"
      },
      Server_Settings: {
        Settings_Page_Title: "设置",
        Settings_SFTP_Title_1: "SFTP详情",
        Settings_SFTP_Title_2: "服务器地址",
        Settings_SFTP_Title_3: "用户名",
        Settings_SFTP_Desc_1: "您的SFTP密码与您用于访问此面板的密码相同。",
        Settings_SFTP_Button: "运行SFTP",
        Settings_Debug_Title_1: "调试信息",
        Settings_Debug_Title_2: "节点",
        Settings_Debug_Title_3: "服务器ID",
        Settings_Reinstall_Title_1: "重新安装服务器",
        Settings_Reinstall_Title_2: "确认重新安装服务器",
        Settings_Reinstall_Button: "是，重新安装服务器",
        Settings_Reinstall_Desc_1: "在此过程中，您的服务器将停止运行，并且可能会删除或修改某些文件，您确定要继续吗？",
        Settings_Reinstall_Desc_2: "重新安装服务器将停止它，然后重新运行最初设置它的安装脚本。",
        Settings_Reinstall_Desc_3: "在此过程中可能会删除或修改某些文件，请在继续操作之前备份您的数据。",
        Settings_Reinstall_Success: "您的服务器已开始重新安装进程。",
        Settings_Reinstall_Error: "无法与运行此服务器的计算机建立连接。请稍后重试",
        Settings_Rename_Server_Title_1: "修改服务器名称",
        Settings_Rename_Server_Title_2: "服务器名称",
        Settings_Rename_Server_Button: "保存",
        Settings_Rename_Required: "名称是必填字段"
      },
      Server_Startup: {
        Startup_Page_Title: "启动设置",
        Startup_Command_Title_1: "启动命令",
        Startup_Docker_Title: "Docker镜像",
        Startup_Docker_Desc: "这是一项高级功能，允许您在运行此服务器实例时选择要使用的 Docker 映像。",
        Startup_Docker_Error: "此服务器的 Docker 映像已由管理员手动设置，无法通过此 UI 更改。",
        Startup_Variables_Title: "变量",
        Startup_Variables_Read: "只读",
        Startup_Server_Error_Title: "Oops!",
      },
      Server_Features: {
        Features_Invalid_Java_Title_1: "无效的Java版本，更新 Docker 镜像？",
        Features_Invalid_Java_Desc_1: "由于Java版本不满足要求，此服务器无法启动。",
        Features_Invalid_Java_Desc_2: `通过按下面的“更新 Docker 镜像”，您确认此服务器使用的 Docker 镜像将更改为下面包含您请求的 Java 版本的镜像。`,
        Features_Invalid_Java_Desc_3: "请从下面的列表中选择一个 Java 版本。",
        Features_Invalid_Java_Button_1: "更新 Docker 镜像",
        Features_Invalid_Java_Button_2: "取消",
        Features_Accept_Eula_Title: "同意Minecraft® EULA",
        Features_Accept_Eula_Desc_1: `点击下方的“我同意”即表示您同意`,
        Features_Accept_Eula_Desc_2: "Minecraft® EULA",
        Features_Accept_Eula_Button_1: "我同意",
        Features_Accept_Eula_Button_2: "取消",
      },
      Server_States: {
        Server_Installing_Title: "运行安装程序",
        Server_Installing_Desc: "您的服务器马上就准备好，请在几分钟后重试。",
        Server_Suspended_Title: "服务器已暂停",
        Server_Suspended_Desc: "此服务器已被暂停且不可访问。",
        Server_Transferring_Title: "迁移中",
        Server_Transferring_Desc: "您的服务器已经迁移到一个新的节点，请在稍后查看。",
        Server_Restoring_Title: "从备份中恢复",
        Server_Restoring_Desc: "您的服务器当前正在从一个备份中恢复，请在几分钟后查看。"
      },
      Page_Titles: {
        Title_Console: "控制台",
        Title_File_Manager: "文件管理器",
        Title_Databases: "数据库",
        Title_Schedules: "计划任务",
        Title_Users: "用户",
        Title_Backups: "备份",
        Title_Network: "网络",
        Title_Startup: "启动",
        Title_Settings: "设置",
        Title_API_Credentials: "API证书"
      },
      Times_And_Dates: {
        Date_Format: "dd'-'MM'-'yyyy h:mma", // For details about formats, look at this: https://thecodebarbarian.com/formatting-javascript-dates-with-moment-js.html
        Time_Minutes_1: "3分钟前",
        Time_Minutes_2: "2分钟前",
        Time_Minutes_3: "1分钟前",
        Time_Minutes_4: "少于1分钟",
        Time_Minutes_5: "不到1分钟前",
        Time_Minutes_6: "1分钟前",
        Time_Minutes_7: "2分钟前",
        Time_Minutes_8: "3分钟前",
        Time_Minutes_9: "4分钟前",
        Time_Minutes_10: "5分钟前",
        Time_Minutes_11: "6分钟前",
        Time_Minutes_12: "7分钟前",
        Time_Minutes_13: "8分钟前",
        Time_Minutes_14: "9分钟前",
        Time_Minutes_15: "10分钟前",
        Time_Minutes_16: "11分钟前",
        Time_Minutes_17: "12分钟前",
        Time_Minutes_18: "13分钟前",
        Time_Minutes_19: "14分钟前",
        Time_Minutes_20: "15分钟前",
        Time_Minutes_21: "16分钟前",
        Time_Minutes_22: "17分钟前",
        Time_Minutes_23: "18分钟前",
        Time_Minutes_24: "19分钟前",
        Time_Minutes_25: "20分钟前",
        Time_Minutes_26: "21分钟前",
        Time_Minutes_27: "22分钟前",
        Time_Minutes_28: "23分钟前",
        Time_Minutes_29: "24分钟前",
        Time_Minutes_30: "25分钟前",
        Time_Minutes_31: "26分钟前",
        Time_Minutes_32: "27分钟前",
        Time_Minutes_33: "28分钟前",
        Time_Minutes_34: "29分钟前",
        Time_Minutes_35: "30分钟前",
        Time_Minutes_36: "31分钟前",
        Time_Minutes_37: "32分钟前",
        Time_Minutes_38: "33分钟前",
        Time_Minutes_39: "34分钟前",
        Time_Minutes_40: "35分钟前",
        Time_Minutes_41: "36分钟前",
        Time_Minutes_42: "37分钟前",
        Time_Minutes_43: "38分钟前",
        Time_Minutes_44: "39分钟前",
        Time_Minutes_45: "40分钟前",
        Time_Minutes_46: "41分钟前",
        Time_Minutes_47: "42分钟前",
        Time_Minutes_48: "43分钟前",
        Time_Minutes_49: "44分钟前",
        Time_Minutes_50: "45分钟前",
        Time_Minutes_51: "46分钟前",
        Time_Minutes_52: "47分钟前",
        Time_Minutes_53: "48分钟前",
        Time_Minutes_54: "49分钟前",
        Time_Minutes_55: "50分钟前",
        Time_Minutes_56: "51分钟前",
        Time_Minutes_57: "52分钟前",
        Time_Minutes_58: "53分钟前",
        Time_Minutes_59: "54分钟前",
        Time_Minutes_60: "55分钟前",
        Time_Minutes_61: "56分钟前",
        Time_Minutes_62: "57分钟前",
        Time_Minutes_63: "58分钟前",
        Time_Minutes_64: "59分钟前",
        Time_Hours_1: "1小时前",
        Time_Hours_2: "2小时前",
        Time_Hours_3: "3小时前",
        Time_Hours_4: "4小时前",
        Time_Hours_5: "5小时前",
        Time_Hours_6: "6小时前",
        Time_Hours_7: "7小时前",
        Time_Hours_8: "8小时前",
        Time_Hours_9: "9小时前",
        Time_Hours_10: "10小时前",
        Time_Hours_11: "11小时前",
        Time_Hours_12: "12小时前",
        Time_Hours_13: "13小时前",
        Time_Hours_14: "14小时前",
        Time_Hours_15: "15小时前",
        Time_Hours_16: "16小时前",
        Time_Hours_17: "17小时前",
        Time_Hours_18: "18小时前",
        Time_Hours_19: "19小时前",
        Time_Hours_20: "20小时前",
        Time_Hours_21: "21小时前",
        Time_Hours_22: "22小时前",
        Time_Hours_23: "23小时前",
      },
      Errors: {
        Error_Key_Undefined: "内部错误：此消息尚未设置，联系作者：Ferks#7575",
        Error_Server_Title: "出了点问题",
        Error_Server_Desc: "找不到请求的资源。",
        Error_Permission_Title: "访问被拒绝",
        Error_Permission_Desc: "您没有权限访问此页面。",
        Error_Variables_1: "值字段是必填字段。",
        Error_Variables_2: "该值必须为 1 位数字。",
        Error_Variables_3: "这个值无效",
        Error_Variables_4: "该值必须至少为 1。",
        Error_Variables_5: "这个值大于限制。",
        Error_Variables_6: "值格式无效。",
        Error_Variables_7: "该值只能包含字母、数字和破折号。该值只能包含字母、数字和下划线。"
      },
    }
}