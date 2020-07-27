
import * as _ from 'lodash';
import { CoConfigManager } from '@co/core';

declare var window;

export function setupVersion(planet: any) {
  const environment = CoConfigManager.getValue("environment");

  if (environment === 'prod') return;
  const envMaps: any = {
    "prod": "生产环境",
    "uat": "UAT环境",
    "test": "测试环境",
    "dev": "开发环境"
  }

  window.version = function () {
    const versionInfo = {
      env: envMaps[environment],
      backendPlugins: [],
      fontendPlugins: []
    };

    //获取后台配置
    const backendPlatformStr = localStorage.getItem("co.session");
    if (!backendPlatformStr) {
      return;
    }

    const backPlatformInfo = JSON.parse(backendPlatformStr)?.session?.platform;
    versionInfo.backendPlugins.push({
      name: _.padEnd('CO.Platform', 20),
      version: _.padEnd(backPlatformInfo.version, 20),
      releaseDate: _.padEnd(backPlatformInfo.releaseDate, 20)
    });

    backPlatformInfo.pluginVersions?.forEach(element => {
      versionInfo.backendPlugins.push({
        name: _.padEnd(_.join(_.split(element.name, '.', 2), '.'), 20),
        version: _.padEnd(element.version, 20),
        releaseDate: _.padEnd(element.releaseDate, 20)
      });
    });

    //获取前台配置
    versionInfo.fontendPlugins.push({
      name: _.padEnd('co-portal', 20),
      version: _.padEnd(process.env.APP_VERSION, 20),
      releaseDate: _.padEnd(new Date(process.env.APP_RELEASEDATE), 20)
    });

    const apps = window.planet?.apps;
    if (apps) {
      for (const name in apps) {
        const app = apps[name];
        const vi = apps[name].extras || {};
        versionInfo.fontendPlugins.push({
          name: _.padEnd(`co-${app.name}`, 20),
          version: _.padEnd(vi.version, 20),
          releaseDate: _.padEnd(new Date(vi.releaseDate), 20)
        });
      }
    }
    printVersion(versionInfo);
  }
}

function printVersion(versionInfo: any) {

  console.log('************************************************************************************');
  console.log("%c*                 _____ _ _          ____                                         *", 'color: blue;');
  console.log("%c*                / ____(_) |        / __ \\                                        *", 'color: blue;');
  console.log("%c*               | |     _| |_ _   _| |  | | ___ ___  __ _ _ __                    *", 'color: blue;');
  console.log("%c*               | |    | | __| | | | |  | |/ __/ _ \\/ _\\` | '_ \\                  *", 'color: blue;');
  console.log("%c*               | |____| | |_| |_| | |__| | (_|  __/ (_| | | | |                  *", 'color: blue;');
  console.log("%c*                \\_____|_|\\__|\\__, |\\____/ \\___\\___|\\__,_|_| |_|                  *", 'color: blue;');
  console.log("%c*                              __/ |                                              *", 'color: blue;');
  console.log("%c*                             |___/                                               *", 'color: blue;');
  console.log('*---------------------------------------------------------------------------------*');
  console.log(`%c*                              <<${versionInfo.env}>>                                        *`, 'color: red;');
  console.log('************************************************************************************');
  console.log('*模块(后台)                       版本                          时间                *');
  console.log('*---------------------------------------------------------------------------------*');
  versionInfo.backendPlugins.forEach(element => {
    console.log(`*${element.name}            ${element.version}          ${format(new Date(element.releaseDate), 'yy-MM-dd hh:mm:ss')}   *`);
  });
  console.log('************************************************************************************');
  console.log('*                                                                                  *');
  console.log('************************************************************************************');
  console.log('*模块(前端)                        版本                          时间               *');
  console.log('*----------------------------------------------------------------------------------*');
  versionInfo.fontendPlugins.forEach(element => {
    console.log(`*${element.name}              ${element.version}         ${format(new Date(element.releaseDate), 'yy-MM-dd hh:mm:ss')}  *`);
  });
  console.log('************************************************************************************');
}

function format(date: Date, fmt: string) {
  var o = {
    "M+": date.getMonth() + 1, //月份
    "d+": date.getDate(), //日
    "h+": date.getHours(), //小时
    "m+": date.getMinutes(), //分
    "s+": date.getSeconds(), //秒
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度
    "S": date.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}