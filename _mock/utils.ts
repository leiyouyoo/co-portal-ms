import { Random } from 'mockjs';

/** 生成头像，`id` 只能0-8 */
export function genMp(id?: number) {
  return `https://randomuser.me/api/portraits/lego/${typeof id === 'undefined' ? Random.natural(0, 8) : id}.jpg`;
}
