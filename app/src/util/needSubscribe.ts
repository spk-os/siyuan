import {showMessage} from "../dialog/message";
import {getCloudURL} from "../config/util/about";
import {isInIOS} from "../protyle/util/compatibility";

export const needSubscribe = (tip = window.siyuan.languages._kernel[29]) => {
    if (window.siyuan.user && (window.siyuan.user.userSiYuanProExpireTime === -1 || window.siyuan.user.userSiYuanProExpireTime > 0)) {
        // 终身会员或订阅未过期
        return false;
    }
    if (tip) {
        if (tip === window.siyuan.languages._kernel[29]) {
            tip = isInIOS() ? window.siyuan.languages._kernel[295] : window.siyuan.languages._kernel[29].replaceAll("${accountServer}", getCloudURL(""));
        }
        showMessage(tip);
    }
    return true;
};

/**
 * 判断是否可以使用第三方同步
 *
 * SPK-OS 补丁：与 kernel/model/conf.go IsPaidUser 同步放行，解锁第三方同步前端闸门
 * （自建 MinIO S3 场景）。升级 rebase 时如冲突，保留 return true 即可。
 */
export const isPaidUser = () => {
    return true;
};
