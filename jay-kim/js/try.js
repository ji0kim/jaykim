					var mainContBnr=(function(){
						var buArr =[],arlen;
						return {
							init:function(){
								this._addCN();
								this._clickReg();
								this._clickArrow();
							},
							_addCN:function(){
								var buarr=["holder-bu-center","holder-bu-awayR1","holder-bu-awayR2","holder-bu-awayL2","holder-bu-awayL1"];
								for(var i=1; i<=buarr.length; ++i){
									$("#bu"+i).removeClass().addClass(buarr[i-1]+" holder-bu");
								}
							},
							_clickReg:function(){
								$("#slider-bu .holder-bu").each(function(){
									buArr.push($(this).attr('class'));
								});
								arlen=buArr.length;
								for(var i=0;i<arlen;++i){
									buArr[i]=buArr[i].replace(" holder-bu","")
								};
								$("#slider-bu .thumb").click(function(e){
									e.preventDefault();
									var me=$(this).parent()[0],
									id=$(this).parent()[0].id||e,
									joId=$("#"+id),
									joCN=joId.attr("class").replace(" holder-bu","");
									var cpos=buArr.indexOf(joCN),
									mpos=buArr.indexOf("holder-bu-center");

									if(cpos!=mpos){
										tomove=cpos>mpos?arlen-cpos+mpos:mpos-cpos;
										while(tomove){
											var t=buArr.shift();
											buArr.push(t);
											for(var i=1;i<=arlen;++i){
												$("#bu"+i).removeClass().addClass(buArr[i-1]+" holder-bu");
											}
											--tomove;
										}
									}
								})
							},
							_clickArrow:function(){
								$('#slider-bu .btn-right').on('click',function(e){
									e.preventDefault();
									// $('#slider-bu .holder-bu-awayR1 .thumb').focus();
									$('#slider-bu .holder-bu-awayR1 .thumb').trigger('click');
								});
								$('#slider-bu .btn-left').on('click',function(e){
									e.preventDefault();
									// $('#slider-bu .holder-bu-awayL1 .thumb').focus();
									$('#slider-bu .holder-bu-awayL1 .thumb').trigger('click');
								});
							}
						};
                    })
                    ();
					window.mainContBnr = mainContBnr;
                    mainContBnr.init();
                    






                    var De = a.b.div.withConfig({
                            displayName: "RotateCarousel__Wrapper",
                            componentId: "sc-1prsiqi-0"
                        })(["max-width:1440px;width:100%;height:58vw;max-height:900px;position:relative;margin:90px auto 0;overflow:hidden;perspective:500px;", ";"], c.a.mobile(Fe())),
                        He = a.b.img.withConfig({
                            displayName: "RotateCarousel__Image",
                            componentId: "sc-1prsiqi-1"
                        })(["width:85%;position:absolute;top:50%;left:50%;box-shadow:1px 5px 10px rgba(0,0,0,0.3);transition:all 0.6s ease-in-out;&.center{transform:translate3d(-50%,-53%,0);z-index:15;}&.left{transform:translate3d(-53%,-43%,-50px);z-index:5;}&.right{transform:translate3d(-45%,-48%,-25px);z-index:10;}", ";"], c.a.mobile(ze())),
                        Re = a.b.img.withConfig({
                            displayName: "RotateCarousel__MobileImage",
                            componentId: "sc-1prsiqi-2"
                        })(["display:none;width:70vw;position:absolute;box-shadow:1px 5px 10px rgba(0,0,0,0.3);transition:all 0.5s ease-in-out;&.center{top:0;left:calc((30vw - 100px) / 2);z-index:15;}&.right{top:15px;left:calc(100vw - 70vw - 100px);z-index:10;1}&.left{top:30px;left:0;z-index:5;}", ";"], c.a.mobile(Le(), c.a.iphonePlus(Pe()))),
                        We = a.b.div.withConfig({
                            displayName: "RotateCarousel__Button",
                            componentId: "sc-1prsiqi-3"
                        })