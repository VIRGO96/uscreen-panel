<template>
  <div >
    <b-container class="pr-3 pt-5 pb-5 pl-3  mt--50 pb-1 bg-white card shadow" style="border:1px solid #dcdcdc">
      <b-row>
        <b-col>
            Login
        </b-col>
        
      </b-row>
      <b-row class="mt-2">
        <b-col>
             <b-input-group  class="mt-3">
                <b-form-input v-model="text" placeholder="Username"></b-form-input>
                <b-input-group-append>
                    <b-button variant="light" style="border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;border-right:1px solid #dcdcdc"><span class="fa fa-user"></span></b-button>
                    
                </b-input-group-append>
            </b-input-group>
        </b-col>
        
      </b-row>
      <b-row class="mt-2">
        <b-col>
            <b-input-group  class="mt-3">
                <b-form-input v-model="text" placeholder="Password"></b-form-input>
                <b-input-group-append>
                    <b-button variant="light" style="border-top:1px solid #dcdcdc;border-bottom:1px solid #dcdcdc;border-right:1px solid #dcdcdc"><span class="fa fa-lock"></span></b-button>
                    
                </b-input-group-append>
            </b-input-group>
        </b-col>
        
      </b-row>
       <b-row class="mt-2">
        <b-col>
            <b-button variant="primary" pill class="pr-4 pl-4">Sign In</b-button>
        </b-col>
        
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'SecondaryHeader',
  props: {
    msg: String
  },
  data(){
    return {
      series: [{
                data: [10, 10, 20, 20, 20, 20, 30, 50, 70, 50, 69, 20, 30, 40, 50, 58, 20, 30, 40, 50, 40]
            }],
            secchartOptions: {
                chart: {
                    type: 'bar',
                    height: 150,
                    toolbar: {
                        show: false
                    }
                },
                colors: ['#349dfa'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        startingShape: 'flat',
                        endingShape: 'flat',
                        columnWidth: '30%',
                        barHeight: '100%',
                        distributed: false,

                    }
                },
                dataLabels: {
                    enabled: false
                },
                grid: {
                    show: false,

                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },

                },
                xaxis: {

                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    },
                    categories: [],
                },
                yaxis: {
                    show: false
                }
            },
            chartOptions: {
                chart: {
                    type: 'bar',
                    height: 150,
                    toolbar: {
                        show: false
                    }
                },
                grid: {
                    show: false,

                    xaxis: {
                        lines: {
                            show: false
                        }
                    },
                    yaxis: {
                        lines: {
                            show: false
                        }
                    },

                },
                colors: ['#817cd7'],
                plotOptions: {
                    bar: {
                        horizontal: false,
                        startingShape: 'flat',
                        endingShape: 'flat',
                        columnWidth: '30%',
                        barHeight: '100%',
                        distributed: false,

                    }
                },
                dataLabels: {
                    enabled: false
                },
                xaxis: {

                    labels: {
                        show: false
                    },
                    axisBorder: {
                        show: false
                    },
                    categories: [],
                },
                yaxis: {
                    show: false
                }
            }


    }
  }
}
</script>

<style  scoped>
/* Desktops and laptops ----------- */
@media only screen  and (min-width : 1224px) {
.visitor-text{
    position: absolute;
    top: 3.5rem;
    left: 5rem;
}

.page-text{
    position: absolute;
    top: 3.5rem;
    left: 4rem;
}



}

@media only screen and (min-device-width : 320px) and (max-device-width : 480px) {
.visitor-text{
    position: absolute;
    top: 3.6rem;
    left: 10rem;
}

.page-text{
    position: absolute;
    top: 3.7rem;
    left: 9rem;
}
}
</style>

