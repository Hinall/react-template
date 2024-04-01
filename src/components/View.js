import React, { useState } from 'react'
import { Viewer } from "resium";
import { Cartesian3, ImageryProvider, OpenStreetMapImageryProvider, WebMapServiceImageryProvider } from 'cesium';
import { Entity } from 'resium'
import { ImageryLayer } from 'resium';
import { Cesium3DTileset } from 'resium';
import { CameraFlyTo } from 'resium';
import { useRef } from 'react';
import { ArcGisMapServerImageryProvider } from 'cesium';
import axios from 'axios';
import LayersIcon from '@mui/icons-material/Layers';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../index.css';

export default function View3D() {

    const navigate = useNavigate();

    const layerIcon = {
        position: "absolute"
    }


    const imgProvider = new OpenStreetMapImageryProvider({
        url: 'https://tile.openstreetmap.org/'
    });

    const ward_boundary = useRef(new WebMapServiceImageryProvider({
        url: 'https://re-gis.mcgm.gov.in/erdas-apollo/vector/MCGM?',
        layers: 'ward_boundary',
        parameters: {
            format: 'image/png',
            transparent: true
        }
    }));

    const cameraViewer = useRef(<CameraFlyTo destination={Cartesian3.fromDegrees(75.8577, 22.7196, 10000)} />);

    // Building variables Starts
    const [showbuilding, setOnOff] = useState(false);
    const [buildingData, setData] = useState(<Cesium3DTileset
        url="https://re-gis.mcgm.gov.in:9443/data/Building_A/tileset.json"
        show={false}
    />);

    const buildingbtn = useRef('Show');
    // Building Varibale Ends


    // Bridge VAriable Starts
    const [showBridge, setBridgeOnOff] = useState(false);
    const [bridgeData, setBridgeData] = useState(

        <Cesium3DTileset
            url="https://re-gis.mcgm.gov.in:9443/data/Bridge/tileset.json"
            show={false}
        />

    );
    const bridgebtn = useRef('Show Bridge');
    // Bridge Varibale Ends

    const [showWMS, setWMSOnOff] = useState(false);


    function hideShowBridge() {

        if (showBridge === true) {

            setBridgeOnOff(false);

            setBridgeData(<Cesium3DTileset
                url="https://re-gis.mcgm.gov.in:9443/data/Bridge/tileset.json"
                show={false}
            />)

            bridgebtn.current = 'Show Bridge';

        }
        else {

            setBridgeOnOff(true);

            setBridgeData(<Cesium3DTileset
                url="https://re-gis.mcgm.gov.in:9443/data/Bridge/tileset.json"
                show={true}
            />)

        }

        bridgebtn.current = 'Hide Bridge';

    }


    function hideShowBuilding() {

        if (showbuilding === true) {
            setOnOff(false);

            setData(<Cesium3DTileset
                url="https://re-gis.mcgm.gov.in:9443/data/Building_A/tileset.json"
                show={false}
            />);

            buildingbtn.current = 'Show';

        }
        else {
            setOnOff(true);

            setData(<Cesium3DTileset
                url="https://re-gis.mcgm.gov.in:9443/data/Building_A/tileset.json"
                show={true}
            />);

            buildingbtn.current = 'Hide';

        }


    }


    function handleLogout() {
        localStorage.clear();
        navigate("/login");

    }

    function handleChange(e) {

        if (e.target.value == "3D_Building") {

            if (showbuilding === true) {
                setOnOff(false);

                setData(<Cesium3DTileset
                    url="https://re-gis.mcgm.gov.in:9443/data/Building_A/tileset.json"
                    show={false}
                />);

                buildingbtn.current = 'Show';

            }
            else {
                setOnOff(true);

                setData(<Cesium3DTileset
                    url="https://re-gis.mcgm.gov.in:9443/data/Building_A/tileset.json"
                    show={true}
                />);

                buildingbtn.current = 'Hide';

            }


        }

        if (e.target.value == "Bridge") {

            if (showBridge === true) {

                setBridgeOnOff(false);

                setBridgeData(<Cesium3DTileset
                    url="https://re-gis.mcgm.gov.in:9443/data/Bridge/tileset.json"
                    show={false}
                />)

                bridgebtn.current = 'Show Bridge';

            }
            else {

                setBridgeOnOff(true);

                setBridgeData(<Cesium3DTileset
                    url="https://re-gis.mcgm.gov.in:9443/data/Bridge/tileset.json"
                    show={true}
                />)

            }

            bridgebtn.current = 'Hide Bridge';

        }


        if (e.target.value == "wms_layer") {


            if (showWMS === true) {
                setWMSOnOff(false);
            }
            else {
                setWMSOnOff(true);
            }

        }

    }


    function apiCall() {

        var form_data = {
            flag: "fetch",
            ward_name: "D"
        }

        axios({
            url: "http://localhost:8085/crud_pin_point_data",
            method: "POST",
            data: form_data,
        })
            .then((res) => {
                console.log(res);
            })
            .catch((err) => { console.log(err) });
    }





    return (
        <div>
            <div className="checkbox_style container mt-5  pb-5 pt-5">
                <div className="form-check m-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="languages"
                        value="3D_Building"
                        id="3d_building"
                        onChange={
                            handleChange
                        }
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        3D Building
                    </label>
                </div>
                <div className="form-check m-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="languages"
                        value="Bridge"
                        id="flexCheckDefault"
                        onChange={
                            handleChange
                        }
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Bridge
                    </label>
                </div>

                <div className="form-check m-3">
                    <input
                        className="form-check-input"
                        type="checkbox"
                        name="languages"
                        value="wms_layer"
                        id="flexCheckDefault"
                        onChange={
                            handleChange
                        }
                    />
                    <label
                        className="form-check-label"
                        htmlFor="flexCheckDefault"
                    >
                        Wms Layer
                    </label>
                </div>

            </div>

            <Viewer full>
                {cameraViewer.current}

                {/* <ImageryLayer imageryProvider={ ward_boundary } ></ImageryLayer> */}
                <ImageryLayer imageryProvider={
                    new OpenStreetMapImageryProvider({
                        url: "https://tile.openstreetmap.org/",
                    })
                }></ImageryLayer>


                <ImageryLayer imageryProvider={ward_boundary.current} show={showWMS} />

                {buildingData}
                {bridgeData}
                {/* 
            <button className='.btn_remove' onClick={ hideShowBuilding }>{ buildingbtn.current }</button>
            <button className='.btn_remove' onClick={ hideShowBridge }>{ bridgebtn.current }</button> */}

                {/* <button className='btn btn-primary md-3' onClick={apiCall}>Fetch</button>
                <button className='btn btn-primary md-3' onClick={handleLogout}>Logout</button> */}
            </Viewer>
                
            <LayersIcon sx={{ color: "#1F2A40" ,  fontSize: 40 }}  style={layerIcon}/>
        </div>
    )
}
