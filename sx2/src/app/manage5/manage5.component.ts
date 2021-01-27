import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage5',
  templateUrl: './manage5.component.html',
  styleUrls: ['./manage5.component.css']
})
export class Manage5Component {
  baseUrl = "http://192.168.43.72:3000/";
  constructor(private httpClient: HttpClient) { }

  ledon() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'ledon', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('LED打开');
        }
      }
    )
  }
  ledoff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'ledoff', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('LED关闭');
        }
      }
    )
  }
  fanoff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'fan/off', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('风扇关闭');
        }
      }
    )
  }
  fanlow() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'fan/low', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('风扇打开，风速低档');
        }
      }
    )
  }
  fanhigh() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'fan/high', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('风扇打开，风速高档');
        }
      }
    )
  }
  acon() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'ac/acon', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('空调打开');
        }
      }
    )
  }
  acoff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'ac/acoff', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('空调关闭');
        }
      }
    )
  }
  cspon() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'csp/cspon', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('火警喷头打开');
        }
      }
    )
  }
  cspoff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'csp/cspoff', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('火警喷头关闭');
        }
      }
    )
  }
  fspon() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'fsp/fspon', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('花洒喷头打开');
        }
      }
    )
  }
  fspoff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'fsp/fspoff', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('花洒喷头关闭');
        }
      }
    )
  }
  calarmon() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'calarm/calarmon', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('警报打开');
        }
      }
    )
  }
  calarmoff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'calarm/calarmoff', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('警报关闭');
        }
      }
    )
  }
  windowon() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'window/windowon', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('窗户打开');
        }
      }
    )
  }
  windowoff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'window/windowoff', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('窗户关闭');
        }
      }
    )
  }
  dooron() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'door/dooron', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('门打开');
        }
      }
    )
  }
  dooroff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'door/dooroff', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('门关闭');
        }
      }
    )
  }
  cameraon() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'camera/cameraon', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('摄像机打开');
        }
      }
    )
  }
  cameraoff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'camera/cameraoff', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('摄像机关闭');
        }
      }
    )
  }
  curtainon() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'curtain/curtainon', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('窗帘打开');
        }
      }
    )
  }
  curtainoff() {
    const xx = []
    this.httpClient.put(this.baseUrl + 'curtain/curtainoff', xx).subscribe(
      (val: any) => {  // val是服务器返回的值
        if (val.succ) {
          alert('窗帘关闭');
        }
      }
    )
  }
}
