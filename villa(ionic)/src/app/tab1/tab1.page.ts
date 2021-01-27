import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { timer } from 'rxjs';
import { CommonService } from '../services/common.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  baseUrl = 'http://192.168.43.72:8080/';
  led: number;
  ac: number;
  fengshan: number;
  fsp: number;
  csp: number;
  calarm: number;
  curtain: number;
  window: number;
  door: number;
  camera: number;

  timer: any;

  temp = 0;
  humd = 0;
  constructor(private commonService: CommonService, private httpclient: HttpClient) { }


  ngOnInit(): void {
    this.time();
    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getled').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.led = 1
        } else {
          this.led = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getac').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.ac = 1
        } else {
          this.ac = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getfengshan').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.fengshan = 1
        } else if (value[0].value == 2) {
          this.fengshan = 2
        } else {
          this.fengshan = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getcsp').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.csp = 1
        } else {
          this.csp = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getfsp').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.fsp = 1
        } else {
          this.fsp = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getcalarm').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.calarm = 1
        } else {
          this.calarm = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getcamera').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.camera = 1
        } else {
          this.camera = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getcurtain').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.curtain = 1
        } else {
          this.curtain = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getwindow').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.window = 1
        } else {
          this.window = 0
        }
      })

    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getdoor').subscribe((value: any) => {
        console.log(value[0].value)
        if (value[0].value == 1) {
          this.door = 1
        } else {
          this.door = 0
        }
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getinfo').subscribe((value: any) => {
        // this.temp = value[0].value;
        //console.log(value[0].temp);
        this.temp = value[0].temp;
      })
    });

    timer(2000, 2000).subscribe(() => {
      this.httpclient.get(this.baseUrl + 'getinfo').subscribe((value: any) => {
        // this.temp = value[0].value;
        //console.log(value[0].humd);
        this.humd = value[0].humd;
      })
    });
  }

  time() {
    var d = new Date(),
      str = '';
    str += d.getFullYear() + '年';
    str += d.getMonth() + 1 + '月';
    str += d.getDate() + '日';
    str += d.getHours() + ':';
    str += d.getMinutes() + ':';
    str += d.getSeconds();
    document.getElementById("time").innerHTML = str;
    setInterval(this.time, 1000);
  }

  turnonled() {
    const obj = {
      status: 1
    }
    this.httpclient.put(this.baseUrl + 'alisetled', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('灯已打开!');
      }
    })
  }

  turnoffled() {
    const obj = {
      status: 0
    }
    this.httpclient.put(this.baseUrl + 'alisetled', obj).subscribe((val: any) => {
      if (val.succ) {
        alert('灯已关闭!');
      }
    })
  }
}
