export default {
    template: `
<div class="bg-white">
    <div v-if="mode=='form'">
        <div class="container-fluid">
                <div class="ml-3 mb-3 mt-3" style="text-align:center; margin:5px;">
                    <h4>BIRTH PHYSICAL SHEET</h4>
                </div>
                    <div class="row mt-2 mb-2">
                        <div class="col-9">
                            <div class="form-inline">                   
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-inline">
                                <label class="ml-3">Date</label>
                                <input type="date" class="form-control mr-2 ml-2"v-model="val.opdate">
                            </div>
                        </div>
                    </div>
                    <table class="table w-100 border-0">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">G</label>
                                    <input type="text" style="width:15%;" class="form-control ml-2" v-model="val.G" />  
                                    <label class="ml-3">P</label>
                                    <input type="text" style="width:15%;" class="form-control ml-2" v-model="val.P" />   
                                    <label class="ml-3">A</label>
                                    <input type="text" style="width:15%;" class="form-control ml-2" v-model="val.A" />  
                                    <label class="ml-3">L</label>
                                    <input type="text" style="width:15%;" class="form-control ml-2" v-model="val.L" />                           
                                </div>   
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2">
                                    <label class="ml-3">GA</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.GA" />
                                    <label class="ml-2">wks.</label>                      
                                </div>   
                            </div>  
                            <div class="col-2">
                                <div class="form-inline mb-2">
                                    <label class="ml-3">APGAR</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.APGAR" />                
                                </div>   
                            </div>  
                        </div>
                        <div class="row">
                            <div class="col-2 mt-2">
                                <div class="form-inline">
                                    <label class="ml-5">Delivery by</label>                    
                                </div>   
                            </div>
                            <div class="col-2 mt-2">
                                <div class="form-inline">               
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.nl"/>
                                        Normal labor
                                    </label>                                        
                                </div>   
                            </div>  
                            <div class="col-3">
                                <div class="form-inline">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.cs"/>
                                        C/S due to
                                    </label>
                                    <input type="text" style="width:40%;" class="form-control ml-2" v-model="val.dueto" />                                   
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline">
                                    <div class="form-inline mb-2">
                                        <label style="cursor:pointer">
                                        <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.oth"/>
                                            Others
                                        </label>
                                        <input type="text" style="width:40%;" class="form-control ml-2" v-model="val.others" />                
                                    </div>                
                                </div>   
                            </div>  
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-inline mb-2 ">
                                    <label class="ml-5">Maternal condition : Bood Group</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.Bood" />               
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">Anti-HIV</label>
                                    <input type="text" style="width:40%;" class="form-control ml-2" v-model="val.Anti" />               
                                </div>   
                            </div>  
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">HBsAg</label>
                                    <input type="text" style="width:40%;" class="form-control ml-2" v-model="val.HBsAg" />               
                                </div>   
                            </div> 
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">VDRL</label>
                                    <input type="text" style="width:80%;" class="form-control ml-2" v-model="val.VDRL" />               
                                </div>   
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">Vital signs : BT</label>
                                    <input type="text" style="width:20%;" class="form-control ml-2" v-model="val.VS" />
                                    <label class="ml-2">C</label>          
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">RR</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.RR" />
                                    <label class="ml-2">/min</label>          
                                </div>   
                            </div> 
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">HR</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.HR" />
                                    <label class="ml-2">/min</label>          
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">BP</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.BP" />
                                    <label class="ml-2">/min</label>          
                                </div>   
                            </div> 
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">BW</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.BW" />
                                    <label class="ml-2">gm</label>          
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">Lt</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.Lt" />
                                    <label class="ml-2">cm</label>          
                                </div>   
                            </div> 
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">HC</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.HC" />
                                    <label class="ml-2">cm</label>          
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">CC</label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.CC" />
                                    <label class="ml-2">cm</label>          
                                </div>   
                            </div> 
                        </div>

                        <div class="ml-3 mt-2" style="text-align:start;">
                            <label>GA : Activ, no cyanosis</label>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2 mt-2">
                                    <label class="ml-3">HEENT:</label>                      
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline">
                                    <label class="ml-3">AF</label>   
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.AF" />
                                    <label class="ml-2">X</label>    
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.AFX" />
                                    <label class="ml-2">cms.,</label>                        
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline">
                                    <label class="ml-3">PP</label>   
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.PP" />
                                    <label class="ml-2">X</label>    
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.PPX" />
                                    <label class="ml-2">cms.,</label>                        
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2 mt-2">
                                    <label class="ml-3">Normal head contour</label>                       
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2 mt-2">                    
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Caput"/>
                                        Caput Succedaneum
                                    </label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.inputCaput" />                   
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Cephal"/>
                                        Cephal Hematoma
                                    </label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.inputCephal" />                   
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Touge"/>
                                        Touge tie
                                    </label>
                                    <input type="text" style="width:30%;" class="form-control ml-2" v-model="val.tougetie" />                   
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2 ">
                            <div class="col-1">
                                <div class="form-inline mb-2 mt-2">                    
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Cataract"/>
                                        Cataract
                                    </label>                  
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Facial"/>
                                        Facial palsy
                                    </label>                
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Torticollis"/>
                                        Torticollis
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Cleft"/>
                                        Cleft lip and cleft palate
                                    </label>                 
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Heart:</label>                      
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Heartnormal"/>
                                        Normal S1S2, no murmur
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Heartabnormal"/>
                                        Abnormal
                                    </label>
                                    <input type="text" style="width:70%;" class="form-control ml-2" v-model="val.inputHeartabnormal"/>                   
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Chest:</label>                      
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Chestnormal"/>
                                        Normal chest contour
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Chestabnormal"/>
                                        Abnormal
                                    </label>
                                    <input type="text" style="width:70%;" class="form-control ml-2" v-model="val.inputChestabnormal"/>                   
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Lungs:</label>                      
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Lungsnormal"/>
                                        Normal and equal breath sound
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Lungsabnormal"/>
                                        Abnormal
                                    </label>
                                    <input type="text" style="width:70%;" class="form-control ml-2" v-model="val.inputLungsabnormal"/>                   
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Abdomen:</label>                      
                                </div>
                            </div>
                            <div class="col-8 mt-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Abdomen"/>
                                        No distention, soft, not tender, No hepatosplenomegaly
                                    </label>                 
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">                
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Abdomenabnormal"/>
                                        Abnormal
                                    </label>
                                    <input type="text" style="width:70%;" class="form-control ml-2" v-model="val.inputAbdomenabnormal"/>                   
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                <label class="ml-3">Genitalia:</label>                
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.maleGenitalia"/>
                                        Male :
                                    </label>            
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Genitaliadescened"/>
                                        Descended testis both
                                    </label>            
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Genitaliaundescend"/>
                                        Undescended testis Rt Lt
                                    </label>            
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1">
                                <div class="form-inline mb-2">              
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">         
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mt-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Genitaliahydo"/>
                                        Hydrocele Rt Lt
                                    </label>            
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.GenitaliaOther"/>
                                        Others
                                    </label>
                                    <input type="text" style="width:70%;" class="form-control ml-2" v-model="val.inputGenitaliaOther"/>                
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1">
                            </div>
                            <div class="col-2">
                                <div class="form-inline mt-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.femaleGenitalia"/>
                                        Female :
                                    </label>            
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mt-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.norFemaleGenitalia"/>
                                        Normal female type
                                    </label>            
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Genitaliaabnormal"/>
                                        Abnormal
                                    </label>
                                    <input type="text" style="width:60%;" class="form-control ml-2" v-model="val.inputGenitaliaabnormal"/>          
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Back:</label>                      
                                </div>
                            </div>
                            <div class="col-5 mt-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Backnormal"/>
                                        Normal alignment no skin dimple
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Backabnormal"/>
                                        Abnormal
                                    </label>
                                    <input type="text" style="width:70%;" class="form-control ml-2" v-model="val.inputBackabnormal"/>                   
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Anus:</label>                      
                                </div>
                            </div>
                            <div class="col-5 mt-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.AnusPatent"/>
                                        Patent
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Anusabnormal"/>
                                        Abnormal
                                    </label>
                                    <input type="text" style="width:70%;" class="form-control ml-2" v-model="val.inputAnusabnormal"/>                   
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Extremities:</label>                      
                                </div>
                            </div>
                            <div class="col-11 mt-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.noExtremities"/>
                                        No, deformities, normal and equal movement, no fracture clavicle, no dislocation of both hips
                                    </label>                 
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                            </div>
                            <div class="col-6">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.abnormalExtremities"/>
                                        Abnormal
                                    </label>
                                    <input type="text" style="width:70%;" class="form-control ml-2" v-model="val.inputabnormalExtremities"/>                   
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mb-2 ">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Neurology:</label>                      
                                </div>
                            </div>
                            <div class="col-11 mt-2">
                                <div class="form-inline mb-2 ml-3 align-items-start">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer;" class="mr-1 align-items-start" v-model="val.normalNeurology"/>
                                    <label style="cursor:pointer" style="width:70%;">
                                        Normal muscles tone, Moro reflex-present and equal, Grasping reflex - present Sucking reflex - present, normal and equla movement, No fracture clavicle, no dislocation of both hips
                                    </label>                 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1 mt-2">
                                <div class="form-inline">
                                    <label class="ml-3">Impression:</label>                      
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionTerm"/>
                                        Term GA
                                    </label>
                                    <input type="text" style="width:20%;" class="form-control ml-2" v-model="val.bydate"/>  
                                    <label class="ml-3">by date</label>
                                    <input type="text" style="width:20%;" class="form-control ml-2" v-model="val.byballard"/>          
                                    <label class="ml-3">by ballard</label>            
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionAGA"/>
                                        AGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionSGA"/>
                                        SGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionLGA"/>
                                        LGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionLBW"/>
                                        LBW
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-7">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTerm"/>
                                        PreTerm GA
                                    </label>
                                    <input type="text" style="width:20%;" class="form-control ml-2" v-model="val.PreTermbydate"/>  
                                    <label class="ml-3">by date</label>
                                    <input type="text" style="width:20%;" class="form-control ml-2" v-model="val.PreTermbyballard"/>          
                                    <label class="ml-3">by ballard</label>            
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTermAGA"/>
                                        AGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTermSGA"/>
                                        SGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTermLGA"/>
                                        LGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTermLBW"/>
                                        LBW
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-7">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Post"/>
                                        Post - Term GA
                                    </label>
                                    <input type="text" style="width:20%;" class="form-control ml-2" v-model="val.Postbydate"/>  
                                    <label class="ml-3">by date</label>
                                    <input type="text" style="width:20%;" class="form-control ml-2" v-model="val.Postbyballard"/>          
                                    <label class="ml-3">by ballard</label>            
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PostAGA"/>
                                        AGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PostSGA"/>
                                        SGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PostLGA"/>
                                        LGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PostLBW"/>
                                        LBW
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-8">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Abnormalast"/>
                                        Abnormal
                                    </label>
                                    <input type="text" style="width:80%;" class="form-control ml-2" v-model="val.inputAbnormalast"/>                   
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-1 mt-2">
                                <div class="form-inline">
                                    <label class="ml-3">Plan:</label>                      
                                </div>
                            </div>
                            <div class="col-3 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Plan"/>
                                        Routine Newborn Care
                                    </label>
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PlanOther"/>
                                        Others
                                    </label>
                                    <input type="text" style="width:70%;" class="form-control ml-2" v-model="val.inputPlanOther"/>   
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-7">
                                <div class="form-inline">                   
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="form-inline ml-3">
                                    <label class="ml-3 mr-3">Signature</label>   
                                    <select2 v-model="val.anesdoc_RID" :url="'/api/UserDatas/SearchAll'" minlen="1" sendpropname="kw" 
                                    :processresult="processsearchphyresutl" @select="anesdocselected"
                                    ref="searchanesdoc" placeholder="" style="width: 70%">
                                </div>
                            </div>
                        </div>
                    </div>     
                <div class="text-center mt-2"><button class="btn btn-success mt-2" style="text-align:center;width:20%;font-size:20px;" @click="savedata" type="button"> save</button></div>           
            </div>

    <div v-if="mode=='print'">
                <div class="ml-3 mb-3 mt-3" style="text-align:center; margin:5px;">
                    <h4>BIRTH PHYSICAL SHEET</h4>
                </div>
                    <div class="row mt-2 mb-2">
                        <div class="col-9">
                            <div class="form-inline">                   
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-inline">
                                <label class="ml-3">Date</label>
                                <span class="ml-2 mr-2">{{toDateString(val.opdate)}}</span>
                            </div>
                        </div>
                    </div>
                    <table class="table w-100 border-0">
                        <div class="row">
                            <div class="col-6">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">G</label>
                                    <span class="ml-2 mr-2 align-items-start text-break">{{val.G}}</span>
                                    <label class="ml-3">P</label>
                                    <span class="ml-2 mr-2 align-items-start text-break">{{val.P}}</span> 
                                    <label class="ml-3">A</label>
                                    <span class="ml-2 mr-2 align-items-start text-break">{{val.A}}</span>
                                    <label class="ml-3">L</label>
                                    <span class="ml-2 mr-2 align-items-start text-break">{{val.L}}</span>                 
                                </div>   
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2">
                                    <label class="ml-3">GA</label>
                                    <span class="ml-2 mr-2 text-break">{{val.GA}}</span> 
                                    <label class="ml-2">wks.</label>                      
                                </div>   
                            </div>  
                            <div class="col-2">
                                <div class="form-inline mb-2">
                                    <label class="ml-3">APGAR</label>
                                    <span class="ml-2 mr-2 text-break">{{val.APGAR}}</span>            
                                </div>   
                            </div>  
                        </div>
                        <div class="row">
                            <div class="col-2">
                                <div class="form-inline">
                                    <label class="ml-5">Delivery by</label>                    
                                </div>   
                            </div>
                            <div class="col-2">
                                <div class="form-inline">               
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.nl"/>
                                        Normal labor
                                    </label>                                        
                                </div>   
                            </div>  
                            <div class="col-3">
                                <div class="form-inline align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.cs"/>
                                        C/S due to
                                    </label> 
                                    <span class="ml-2 mr-2 text-break" style="width:30%;">{{val.dueto}}</span>                                 
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline">
                                    <div class="form-inline mb-2 align-items-start">
                                        <label style="cursor:pointer">
                                        <input type="checkbox" onclick="return false"
                                         style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.oth"/>
                                            Others
                                        </label>
                                        <span class="ml-2 mr-2 text-break" style="width:60%;">{{val.others}}</span>                
                                    </div>                
                                </div>   
                            </div>  
                        </div>

                        <div class="row">
                            <div class="col-6">
                                <div class="form-inline mb-2 align-items-start">
                                    <label class="ml-5">Maternal condition : Bood Group</label>
                                    <span class="ml-2 mr-2 text-break" style="width:40%;">{{val.Bood}}</span>           
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">Anti-HIV</label>
                                    <span class="ml-2 mr-2">{{val.Anti}}</span>                 
                                </div>   
                            </div>  
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">HBsAg</label>
                                    <span class="ml-2 mr-2">{{val.HBsAg}}</span>                 
                                </div>   
                            </div> 
                        </div>

                        <div class="row">
                            <div class="col-12">
                                <div class="form-inline mb-2 align-items-start">
                                    <label class="ml-5">VDRL</label>  
                                    <span class="ml-2 mr-2 text-break" style="width:80%;">{{val.VDRL}}</span>            
                                </div>   
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">Vital signs : BT</label>
                                    <span class="ml-2 mr-2 text-break">{{val.VS}}</span>
                                    <label class="ml-2">C</label>          
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">RR</label>
                                    <span class="ml-2 mr-2 text-break">{{val.RR}}</span>
                                    <label class="ml-2">/min</label>       
                                </div>   
                            </div> 
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">HR</label>
                                    <span class="ml-2 mr-2 text-break">{{val.HR}}</span>
                                    <label class="ml-2">/min</label>          
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">BP</label>
                                    <span class="ml-2 mr-2 text-break">{{val.BP}}</span>
                                    <label class="ml-2">/min</label>          
                                </div>   
                            </div> 
                        </div>

                        <div class="row">
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">BW</label>
                                    <span class="ml-2 mr-2 text-break">{{val.BW}}</span>
                                    <label class="ml-2">gm</label>          
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">Lt</label>
                                    <span class="ml-2 mr-2 text-break">{{val.Lt}}</span>
                                    <label class="ml-2">cm</label>          
                                </div>   
                            </div> 
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">HC</label>
                                    <span class="ml-2 mr-2 text-break">{{val.HC}}</span>
                                    <label class="ml-2">cm</label>          
                                </div>   
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-5">CC</label>
                                    <span class="ml-2 mr-2 text-break">{{val.CC}}</span>
                                    <label class="ml-2">cm</label>          
                                </div>   
                            </div> 
                        </div>

                        <div class="ml-3 mt-2" style="text-align:start;">
                            <label>GA : Activ, no cyanosis</label>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3">HEENT:</label>                      
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline">
                                    <label class="ml-3">AF</label>
                                    <span class="ml-2 mr-2 text-break">{{val.AF}}</span>
                                    <label class="ml-2">X</label>
                                    <span class="ml-2 mr-2 text-break">{{val.AFX}}</span>
                                    <label class="ml-2">cms.,</label>                        
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline">
                                    <label class="ml-3">PP</label>   
                                    <span class="ml-2 mr-2 text-break">{{val.PP}}</span>
                                    <label class="ml-2">X</label>    
                                    <span class="ml-2 mr-2 text-break">{{val.PPX}}</span>
                                    <label class="ml-2">cms.,</label>                        
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2">
                                    <label class="ml-3">Normal head contour</label>                       
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2 mt-2">                    
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Caput"/>
                                        Caput Succedaneum
                                    </label>
                                    <span class="ml-2 mr-2 text-break">{{val.inputCaput}}</span>                  
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Cephal"/>
                                        Cephal Hematoma
                                    </label>
                                    <span class="ml-2 mr-2 text-break">{{val.inputCephal}}</span>                  
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Touge"/>
                                        Touge tie
                                    </label>
                                    <span class="ml-2 mr-2 text-break">{{val.tougetie}}</span>                 
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2 ">
                            <div class="col-1">
                                <div class="form-inline mb-2 mt-2">                    
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Cataract"/>
                                        Cataract
                                    </label>                  
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Facial"/>
                                        Facial palsy
                                    </label>                
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Torticollis"/>
                                        Torticollis
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Cleft"/>
                                        Cleft lip and cleft palate
                                    </label>                 
                                </div>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3">Heart:</label>                      
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Heartnormal"/>
                                        Normal S1S2, no murmur
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline mb-2 ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Heartabnormal"/>
                                        Abnormal
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:60%;">{{val.inputHeartabnormal}}</span>                  
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mt-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3">Chest:</label>                      
                                </div>
                            </div>
                            <div class="col-4">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Chestnormal"/>
                                        Normal chest contour
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Chestabnormal"/>
                                        Abnormal
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:60%;">{{val.inputChestabnormal}}</span>                   
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Lungs:</label>                      
                                </div>
                            </div>
                            <div class="col-4 mt-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Lungsnormal"/>
                                        Normal and equal breath sound
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6 mt-2">
                                <div class="form-inline ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Lungsabnormal"/>
                                        Abnormal
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:60%;">{{val.inputLungsabnormal}}</span>                 
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3">Abdomen:</label>                      
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Abdomen"/>
                                        No distention, soft, not tender, No hepatosplenomegaly
                                    </label>                 
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">                
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline mb-2 ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Abdomenabnormal"/>
                                        Abnormal
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:60%;">{{val.inputAbdomenabnormal}}</span>                  
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                <label class="ml-3">Genitalia:</label>                
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.maleGenitalia"/>
                                        Male :
                                    </label>            
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Genitaliadescened"/>
                                        Descended testis both
                                    </label>            
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Genitaliaundescend"/>
                                        Undescended testis Rt Lt
                                    </label>            
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">              
                                </div>
                            </div>
                            <div class="col-2">
                                <div class="form-inline mb-2 ml-3">         
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Genitaliahydo"/>
                                        Hydrocele Rt Lt
                                    </label>            
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="form-inline mb-2 ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.GenitaliaOther"/>
                                        Others
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:60%;">{{val.inputGenitaliaOther}}</span>               
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                            </div>
                            <div class="col-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.femaleGenitalia"/>
                                        Female :
                                    </label>            
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.norFemaleGenitalia"/>
                                        Normal female type
                                    </label>            
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline mb-2 ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Genitaliaabnormal"/>
                                        Abnormal
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:60%;">{{val.inputGenitaliaabnormal}}</span>          
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline ">
                                    <label class="ml-3 ">Back:</label>                      
                                </div>
                            </div>
                            <div class="col-5 ">
                                <div class="form-inline  ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Backnormal"/>
                                        Normal alignment no skin dimple
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Backabnormal"/>
                                        Abnormal
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:60%;">{{val.inputBackabnormal}}</span>                  
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline">
                                    <label class="ml-3 mt-2">Anus:</label>                      
                                </div>
                            </div>
                            <div class="col-5 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.AnusPatent"/>
                                        Patent
                                    </label>                 
                                </div>
                            </div>
                            <div class="col-6 mt-2">
                                <div class="form-inline ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Anusabnormal"/>
                                        Abnormal
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:60%;">{{val.inputAnusabnormal}}</span>                 
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Extremities:</label>                      
                                </div>
                            </div>
                            <div class="col-11 mt-2">
                                <div class="form-inline mb-2 ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.noExtremities"/>
                                        No, deformities, normal and equal movement, no fracture clavicle, no dislocation of both hips
                                    </label>                 
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                            </div>
                            <div class="col-9">
                                <div class="form-inline ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.abnormalExtremities"/>
                                        Abnormal
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:80%;">{{val.inputabnormalExtremities}}</span>             
                                </div>
                            </div>
                        </div>
                        
                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline mb-2">
                                    <label class="ml-3 mt-2">Neurology:</label>                      
                                </div>
                            </div>
                            <div class="col-11 mt-2">
                                <div class="form-inline mb-2 ml-3 align-items-start">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer;" class="mr-1 align-items-start" v-model="val.normalNeurology"/>
                                    <label style="cursor:pointer" style="width:70%;">
                                        Normal muscles tone, Moro reflex-present and equal, Grasping reflex - present Sucking reflex - present, normal and equla movement, No fracture clavicle, no dislocation of both hips
                                    </label>                 
                                </div>
                            </div>
                        </div>

                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline">
                                    <label class="ml-3">Impression:</label>                      
                                </div>
                            </div>
                            <div class="col-6">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionTerm"/>
                                        Term GA
                                    </label>
                                    <span class="ml-2 mr-2 text-break">{{val.bydate}}</span>
                                    <label class="ml-3">by date</label>
                                    <span class="ml-2 mr-2 text-break">{{val.byballard}}</span>      
                                    <label class="ml-3">by ballard</label>            
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionAGA"/>
                                        AGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionSGA"/>
                                        SGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionLGA"/>
                                        LGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.ImpressionLBW"/>
                                        LBW
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-7">
                                <div class="form-inline ml-3 mt-2">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTerm"/>
                                        PreTerm GA
                                    </label>
                                    <span class="ml-2 mr-2 text-break">{{val.PreTermbydate}}</span>
                                    <label class="ml-3">by date</label>
                                    <span class="ml-2 mr-2 text-break">{{val.PreTermbyballard}}</span>          
                                    <label class="ml-3">by ballard</label>            
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTermAGA"/>
                                        AGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTermSGA"/>
                                        SGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTermLGA"/>
                                        LGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PreTermLBW"/>
                                        LBW
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-2">
                            <div class="col-7">
                                <div class="form-inline ml-3 mt-2">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Post"/>
                                        Post - Term GA
                                    </label>
                                    <span class="ml-2 mr-2 text-break">{{val.Postbydate}}</span>
                                    <label class="ml-3">by date</label>
                                    <span class="ml-2 mr-2 text-break">{{val.Postbyballard}}</span>        
                                    <label class="ml-3">by ballard</label>            
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PostAGA"/>
                                        AGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PostSGA"/>
                                        SGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PostLGA"/>
                                        LGA
                                    </label>
                                </div>
                            </div>
                            <div class="col-1 mt-2">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PostLBW"/>
                                        LBW
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-3">
                            <div class="col-12">
                                <div class="form-inline mb-2 ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Abnormalast"/>
                                        Abnormal
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:80%;">{{val.inputAbnormalast}}</span>                  
                                </div>
                            </div>
                        </div>
                        <div class="row mb-2">
                            <div class="col-1">
                                <div class="form-inline">
                                    <label class="ml-3">Plan:</label>                      
                                </div>
                            </div>
                            <div class="col-3">
                                <div class="form-inline ml-3">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.Plan"/>
                                        Routine Newborn Care
                                    </label>
                                </div>
                            </div>
                            <div class="col-8">
                                <div class="form-inline ml-3 align-items-start">
                                    <label style="cursor:pointer">
                                    <input type="checkbox" onclick="return false" style="width:20px;height:20px;cursor:pointer" class="mr-1" v-model="val.PlanOther"/>
                                        Others
                                    </label>
                                    <span class="ml-2 mr-2 text-break" style="width:80%;">{{val.inputPlanOther}}</span>  
                                </div>
                            </div>
                        </div>
                        <div class="row mt-2">
                            <div class="col-7">
                                <div class="form-inline">                   
                                </div>
                            </div>
                            <div class="col-5">
                                <div class="form-inline ml-3">
                                    <label class="ml-3">Signature</label>
                                    <span class="ml-2 mr-2 text-break " style="width:55%;">{{val.anesdoc}}</span> 
                                </div>
                            </div>
                        </div>
                    </div>         
                </div>
            </div>
        </div>
                
                  `,
    data() {
      return {
        val: {
          name: "",
          Patient: "",
          VisitDate: moment().format("YYYY-MM-DDTHH:mm"),
          DCDate :'',
          anesdoc : '',
          anesst : '',
          anesnd : '',
          anesrd : '',
          test : [], 
          //assessDate : moment().format("YYYY-MM-DDTHH:mm"),
        },
        modalp : false,
        testlist : {},
        ridform: undefined,
        userdt: JSON.parse(localStorage.userdata).FirstName,
        userdtl : JSON.parse(localStorage.userdata).LastName,
  
      };
    },
  
    props: {
      // interface method
      // donot remove
      mode: "", //form,print
      visitid: "",
      rid: "", //formid
      formdataid: undefined, //formdata id
      cuserid: "",
      formtype: "",
      vid: "",
      //----------------------
    },
    watch: {},
    mounted: function () {
      this.loaddata();
    },
  
    methods: {
      // interface method
      // donot remove
      setdata: function (d) {
        var th = this;
        th.val = d;
  
        th.ridform = th.formdataid;
        if(th.mode != "print"){ 
        
            var uf = "";
            if ( th.usertl ){
                 uf = th.userdt + "" + th.userdtl;
            }else{
                uf = th.userdt;
            }


            if( th.val.anesdoc != null && th.val.anesdoc != ""){
                th.$refs.searchanesdoc.setRawvalue(th.val.anesdoc);
             }else{
               th.$refs.searchanesdoc.setRawvalue(uf);
               th.val.anesdoc = uf;
                //console.log(th.val.Assessor);
             }
        }

       
      },
  
      anesdocselected: function (data) {
        var th = this;
        if (data == undefined) return;
        th.val.anesdoc = data.text;
      },

  
      processsearchphyresutl: function (data) {
        var res = data.map((x) => {
          var lname = "";
          if (x.LastName != null) {
            lname = x.LastName;
          }
          return {
            id: x.RID,
            text: x.FirstName + " " + lname,
            data: x,
          };
        });
        return res;
      },

      
      loaddata: function () {
        var th = this;
        // this.val.name = "test";
        CallWebAPI(
          "/api/VisitDatas/Searchpatientvisit",
          JSON.stringify({
            vid: th.vid,
          }),
          "POST",
          (res) => {
           // console.log(res)
           th.$refs.searchanesdoc.setRawvalue(th.userdt);
          }
        );
      },
  
     
      savedata: function () {
        console.log(this.formdataid);
        if (this.formdataid != undefined) {
          this.updatedata();
          return;
        }
        var req = {
          FormDB: JSON.stringify(this.val),
          Formbuilder_RID: this.rid,
          Owner_RID: this.cuserid,
          CreateByID: this.cuserid,
          Type: this.formtype,
          Visit_RID: this.vid,
          DateUpdate: moment().format("YYYY-MM-DDTHH:mm:ss"),
        };
  
        var th = this;
        CallWebAPI("/api/formdatas/", JSON.stringify(req), "POST", (res) => {
          th.$emit("formsaved", res);
        });
        // console.log(req);
      },
      updatedata: function () {
        var req = {
          FormDB: JSON.stringify(this.val),
          RID: this.formdataid,
          UserEdit_RID: this.cuserid,
        };
        var th = this;
        CallWebAPI(
          "/api/FormDatas/updateForm",
          JSON.stringify(req),
          "PUT",
          (res) => {
            th.$emit("formsaved", res);
          }
        );
      },
  
  }
  };
  