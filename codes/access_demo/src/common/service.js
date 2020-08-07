/**
 * Created by lyuwei
 * User: lvwei@seemmo.com
 * Date: 2018/09/10
 * Describe:
 * Log:
 *  ---- 2018/09/10 14:25 [lyuwei] 初次添加
 */
import { request } from './serviceBase';

const urlHttp = window.location.origin;

export default {
    getAccessStats(params) {
        return request(urlHttp + '/access/stats', params,{method: "GET"});
    },
    getAccessLogs(params) {
        return request(urlHttp + '/access/logs', params,{method: "GET"});
    },

    //过滤规则请求
    addFilterRule(params) {
        return request(urlHttp + '/access/filter/rule', params, {method: "POST"})
    }
};
