/**
 * Created by lyuwei
 * User: lvwei@seemmo.com
 * Date: 2018/09/10
 * Describe:
 * Log:
 *  ---- 2018/09/10 14:25 [lyuwei] 初次添加
 */
import { request } from './serviceBase';

const urlHttps = window.location.origin;

export default {
    getAccessStats(params) {
        return request(urlHttps + '/access/stats', params,{method: "GET"});
    },
    getAccessLogs(params) {
        return request(urlHttps + '/access/logs', params,{method: "GET"});
    },
};
