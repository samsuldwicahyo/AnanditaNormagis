var wms_layers = [];

var format_desa_0 = new ol.format.GeoJSON();
var features_desa_0 = format_desa_0.readFeatures(json_desa_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_desa_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_desa_0.addFeatures(features_desa_0);
var lyr_desa_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_desa_0, 
                style: style_desa_0,
                popuplayertitle: "desa",
                interactive: true,
                title: '<img src="styles/legend/desa_0.png" /> desa'
            });
var format_AGRIKEBUN_AR_25K_1 = new ol.format.GeoJSON();
var features_AGRIKEBUN_AR_25K_1 = format_AGRIKEBUN_AR_25K_1.readFeatures(json_AGRIKEBUN_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRIKEBUN_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRIKEBUN_AR_25K_1.addFeatures(features_AGRIKEBUN_AR_25K_1);
var lyr_AGRIKEBUN_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRIKEBUN_AR_25K_1, 
                style: style_AGRIKEBUN_AR_25K_1,
                popuplayertitle: "AGRIKEBUN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRIKEBUN_AR_25K_1.png" /> AGRIKEBUN_AR_25K'
            });
var format_AGRISAWAH_AR_25K_2 = new ol.format.GeoJSON();
var features_AGRISAWAH_AR_25K_2 = format_AGRISAWAH_AR_25K_2.readFeatures(json_AGRISAWAH_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AGRISAWAH_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AGRISAWAH_AR_25K_2.addFeatures(features_AGRISAWAH_AR_25K_2);
var lyr_AGRISAWAH_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AGRISAWAH_AR_25K_2, 
                style: style_AGRISAWAH_AR_25K_2,
                popuplayertitle: "AGRISAWAH_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/AGRISAWAH_AR_25K_2.png" /> AGRISAWAH_AR_25K'
            });
var format_PEMUKIMAN_AR_25K_3 = new ol.format.GeoJSON();
var features_PEMUKIMAN_AR_25K_3 = format_PEMUKIMAN_AR_25K_3.readFeatures(json_PEMUKIMAN_AR_25K_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMUKIMAN_AR_25K_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMUKIMAN_AR_25K_3.addFeatures(features_PEMUKIMAN_AR_25K_3);
var lyr_PEMUKIMAN_AR_25K_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMUKIMAN_AR_25K_3, 
                style: style_PEMUKIMAN_AR_25K_3,
                popuplayertitle: "PEMUKIMAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMUKIMAN_AR_25K_3.png" /> PEMUKIMAN_AR_25K'
            });
var format_Bangunan_4 = new ol.format.GeoJSON();
var features_Bangunan_4 = format_Bangunan_4.readFeatures(json_Bangunan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bangunan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bangunan_4.addFeatures(features_Bangunan_4);
var lyr_Bangunan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bangunan_4, 
                style: style_Bangunan_4,
                popuplayertitle: "Bangunan",
                interactive: true,
                title: '<img src="styles/legend/Bangunan_4.png" /> Bangunan'
            });
var format_Jalanlengkapcopy_5 = new ol.format.GeoJSON();
var features_Jalanlengkapcopy_5 = format_Jalanlengkapcopy_5.readFeatures(json_Jalanlengkapcopy_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalanlengkapcopy_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalanlengkapcopy_5.addFeatures(features_Jalanlengkapcopy_5);
var lyr_Jalanlengkapcopy_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jalanlengkapcopy_5, 
                style: style_Jalanlengkapcopy_5,
                popuplayertitle: "Jalan lengkap copy",
                interactive: true,
                title: '<img src="styles/legend/Jalanlengkapcopy_5.png" /> Jalan lengkap copy'
            });
var format_point_6 = new ol.format.GeoJSON();
var features_point_6 = format_point_6.readFeatures(json_point_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_6.addFeatures(features_point_6);
var lyr_point_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_6, 
                style: style_point_6,
                popuplayertitle: "point",
                interactive: true,
                title: '<img src="styles/legend/point_6.png" /> point'
            });
var format_SUNGAI_LN_25K_7 = new ol.format.GeoJSON();
var features_SUNGAI_LN_25K_7 = format_SUNGAI_LN_25K_7.readFeatures(json_SUNGAI_LN_25K_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_LN_25K_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_LN_25K_7.addFeatures(features_SUNGAI_LN_25K_7);
var lyr_SUNGAI_LN_25K_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_LN_25K_7, 
                style: style_SUNGAI_LN_25K_7,
                popuplayertitle: "SUNGAI_LN_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_LN_25K_7.png" /> SUNGAI_LN_25K'
            });
var format_JEMBATAN_PT_25K_8 = new ol.format.GeoJSON();
var features_JEMBATAN_PT_25K_8 = format_JEMBATAN_PT_25K_8.readFeatures(json_JEMBATAN_PT_25K_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JEMBATAN_PT_25K_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JEMBATAN_PT_25K_8.addFeatures(features_JEMBATAN_PT_25K_8);
var lyr_JEMBATAN_PT_25K_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JEMBATAN_PT_25K_8, 
                style: style_JEMBATAN_PT_25K_8,
                popuplayertitle: "JEMBATAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/JEMBATAN_PT_25K_8.png" /> JEMBATAN_PT_25K'
            });
var format_PEMERINTAHAN_PT_25K_9 = new ol.format.GeoJSON();
var features_PEMERINTAHAN_PT_25K_9 = format_PEMERINTAHAN_PT_25K_9.readFeatures(json_PEMERINTAHAN_PT_25K_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PEMERINTAHAN_PT_25K_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PEMERINTAHAN_PT_25K_9.addFeatures(features_PEMERINTAHAN_PT_25K_9);
var lyr_PEMERINTAHAN_PT_25K_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PEMERINTAHAN_PT_25K_9, 
                style: style_PEMERINTAHAN_PT_25K_9,
                popuplayertitle: "PEMERINTAHAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PEMERINTAHAN_PT_25K_9.png" /> PEMERINTAHAN_PT_25K'
            });
var format_TAMBANGAN_PT_25K_10 = new ol.format.GeoJSON();
var features_TAMBANGAN_PT_25K_10 = format_TAMBANGAN_PT_25K_10.readFeatures(json_TAMBANGAN_PT_25K_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TAMBANGAN_PT_25K_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TAMBANGAN_PT_25K_10.addFeatures(features_TAMBANGAN_PT_25K_10);
var lyr_TAMBANGAN_PT_25K_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TAMBANGAN_PT_25K_10, 
                style: style_TAMBANGAN_PT_25K_10,
                popuplayertitle: "TAMBANGAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/TAMBANGAN_PT_25K_10.png" /> TAMBANGAN_PT_25K'
            });
var format_TONGGAKKM_PT_25K_11 = new ol.format.GeoJSON();
var features_TONGGAKKM_PT_25K_11 = format_TONGGAKKM_PT_25K_11.readFeatures(json_TONGGAKKM_PT_25K_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TONGGAKKM_PT_25K_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TONGGAKKM_PT_25K_11.addFeatures(features_TONGGAKKM_PT_25K_11);
var lyr_TONGGAKKM_PT_25K_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TONGGAKKM_PT_25K_11, 
                style: style_TONGGAKKM_PT_25K_11,
                popuplayertitle: "TONGGAKKM_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/TONGGAKKM_PT_25K_11.png" /> TONGGAKKM_PT_25K'
            });
var format_TOPONIMI_PT_25K_12 = new ol.format.GeoJSON();
var features_TOPONIMI_PT_25K_12 = format_TOPONIMI_PT_25K_12.readFeatures(json_TOPONIMI_PT_25K_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOPONIMI_PT_25K_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOPONIMI_PT_25K_12.addFeatures(features_TOPONIMI_PT_25K_12);
var lyr_TOPONIMI_PT_25K_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TOPONIMI_PT_25K_12, 
                style: style_TOPONIMI_PT_25K_12,
                popuplayertitle: "TOPONIMI_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/TOPONIMI_PT_25K_12.png" /> TOPONIMI_PT_25K'
            });
var format_SARANAIBADAH_PT_25K_13 = new ol.format.GeoJSON();
var features_SARANAIBADAH_PT_25K_13 = format_SARANAIBADAH_PT_25K_13.readFeatures(json_SARANAIBADAH_PT_25K_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SARANAIBADAH_PT_25K_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SARANAIBADAH_PT_25K_13.addFeatures(features_SARANAIBADAH_PT_25K_13);
var lyr_SARANAIBADAH_PT_25K_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SARANAIBADAH_PT_25K_13, 
                style: style_SARANAIBADAH_PT_25K_13,
                popuplayertitle: "SARANAIBADAH_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/SARANAIBADAH_PT_25K_13.png" /> SARANAIBADAH_PT_25K'
            });
var format_PENDIDIKAN_PT_25K_14 = new ol.format.GeoJSON();
var features_PENDIDIKAN_PT_25K_14 = format_PENDIDIKAN_PT_25K_14.readFeatures(json_PENDIDIKAN_PT_25K_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PENDIDIKAN_PT_25K_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PENDIDIKAN_PT_25K_14.addFeatures(features_PENDIDIKAN_PT_25K_14);
var lyr_PENDIDIKAN_PT_25K_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PENDIDIKAN_PT_25K_14, 
                style: style_PENDIDIKAN_PT_25K_14,
                popuplayertitle: "PENDIDIKAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/PENDIDIKAN_PT_25K_14.png" /> PENDIDIKAN_PT_25K'
            });
var format_BANGUNAN_PT_25K_15 = new ol.format.GeoJSON();
var features_BANGUNAN_PT_25K_15 = format_BANGUNAN_PT_25K_15.readFeatures(json_BANGUNAN_PT_25K_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BANGUNAN_PT_25K_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BANGUNAN_PT_25K_15.addFeatures(features_BANGUNAN_PT_25K_15);
var lyr_BANGUNAN_PT_25K_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BANGUNAN_PT_25K_15, 
                style: style_BANGUNAN_PT_25K_15,
                popuplayertitle: "BANGUNAN_PT_25K",
                interactive: true,
                title: '<img src="styles/legend/BANGUNAN_PT_25K_15.png" /> BANGUNAN_PT_25K'
            });
var format_RUMAHKU_16 = new ol.format.GeoJSON();
var features_RUMAHKU_16 = format_RUMAHKU_16.readFeatures(json_RUMAHKU_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RUMAHKU_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RUMAHKU_16.addFeatures(features_RUMAHKU_16);
var lyr_RUMAHKU_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RUMAHKU_16, 
                style: style_RUMAHKU_16,
                popuplayertitle: "RUMAHKU",
                interactive: true,
                title: '<img src="styles/legend/RUMAHKU_16.png" /> RUMAHKU'
            });

lyr_desa_0.setVisible(true);lyr_AGRIKEBUN_AR_25K_1.setVisible(true);lyr_AGRISAWAH_AR_25K_2.setVisible(true);lyr_PEMUKIMAN_AR_25K_3.setVisible(true);lyr_Bangunan_4.setVisible(true);lyr_Jalanlengkapcopy_5.setVisible(true);lyr_point_6.setVisible(true);lyr_SUNGAI_LN_25K_7.setVisible(true);lyr_JEMBATAN_PT_25K_8.setVisible(true);lyr_PEMERINTAHAN_PT_25K_9.setVisible(true);lyr_TAMBANGAN_PT_25K_10.setVisible(true);lyr_TONGGAKKM_PT_25K_11.setVisible(true);lyr_TOPONIMI_PT_25K_12.setVisible(true);lyr_SARANAIBADAH_PT_25K_13.setVisible(true);lyr_PENDIDIKAN_PT_25K_14.setVisible(true);lyr_BANGUNAN_PT_25K_15.setVisible(true);lyr_RUMAHKU_16.setVisible(true);
var layersList = [lyr_desa_0,lyr_AGRIKEBUN_AR_25K_1,lyr_AGRISAWAH_AR_25K_2,lyr_PEMUKIMAN_AR_25K_3,lyr_Bangunan_4,lyr_Jalanlengkapcopy_5,lyr_point_6,lyr_SUNGAI_LN_25K_7,lyr_JEMBATAN_PT_25K_8,lyr_PEMERINTAHAN_PT_25K_9,lyr_TAMBANGAN_PT_25K_10,lyr_TONGGAKKM_PT_25K_11,lyr_TOPONIMI_PT_25K_12,lyr_SARANAIBADAH_PT_25K_13,lyr_PENDIDIKAN_PT_25K_14,lyr_BANGUNAN_PT_25K_15,lyr_RUMAHKU_16];
lyr_desa_0.set('fieldAliases', {'id': 'id', 'rt': 'rt', });
lyr_AGRIKEBUN_AR_25K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSKBN': 'JNSKBN', 'FCODE': 'FCODE', 'PUDATE': 'PUDATE', 'AQDATE': 'AQDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_AGRISAWAH_AR_25K_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSWH': 'JNSSWH', 'FCODE': 'FCODE', 'AQDATE': 'AQDATE', 'PUDATE': 'PUDATE', 'REMARK': 'REMARK', 'KODLCO': 'KODLCO', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'TNMSWH': 'TNMSWH', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_PEMUKIMAN_AR_25K_3.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Bangunan_4.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'beds': 'beds', 'layer': 'layer', 'access_roo': 'access_roo', 'parking': 'parking', 'roof_mater': 'roof_mater', 'name': 'name', 'isced_leve': 'isced_leve', 'surface': 'surface', 'addr_house': 'addr_house', 'rooms': 'rooms', 'tunnel': 'tunnel', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'tourism': 'tourism', 'opening_ho': 'opening_ho', 'highway': 'highway', 'smoothness': 'smoothness', 'railway': 'railway', 'width': 'width', 'shop': 'shop', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'bridge': 'bridge', 'aeroway': 'aeroway', 'government': 'government', 'public_tra': 'public_tra', });
lyr_Jalanlengkapcopy_5.set('fieldAliases', {'osm_id': 'osm_id', 'nama': 'nama', });
lyr_point_6.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'beds': 'beds', 'layer': 'layer', 'access_roo': 'access_roo', 'parking': 'parking', 'roof_mater': 'roof_mater', 'name': 'name', 'isced_leve': 'isced_leve', 'surface': 'surface', 'addr_house': 'addr_house', 'rooms': 'rooms', 'tunnel': 'tunnel', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'tourism': 'tourism', 'opening_ho': 'opening_ho', 'highway': 'highway', 'smoothness': 'smoothness', 'railway': 'railway', 'width': 'width', 'shop': 'shop', 'oneway': 'oneway', 'barrier': 'barrier', 'building': 'building', 'capacity': 'capacity', 'operator': 'operator', 'bridge': 'bridge', 'aeroway': 'aeroway', 'government': 'government', 'public_tra': 'public_tra', });
lyr_SUNGAI_LN_25K_7.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'nama': 'nama', });
lyr_JEMBATAN_PT_25K_8.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'TIPJMB': 'TIPJMB', 'FGSJMB': 'FGSJMB', 'TONJMB': 'TONJMB', 'TGGJMB': 'TGGJMB', 'LBRJMB': 'LBRJMB', 'MATJMB': 'MATJMB', 'STRJMB': 'STRJMB', 'DEKJMB': 'DEKJMB', 'BTSJMB': 'BTSJMB', 'AYUJMB': 'AYUJMB', 'JBTJMB': 'JBTJMB', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PEMERINTAHAN_PT_25K_9.set('fieldAliases', {'REMARK': 'REMARK', });
lyr_TAMBANGAN_PT_25K_10.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TONGGAKKM_PT_25K_11.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_TOPONIMI_PT_25K_12.set('fieldAliases', {'FCODE': 'FCODE', 'NAMOBJ': 'NAMOBJ', 'ALIAS': 'ALIAS', 'LOKTPN': 'LOKTPN', 'REMARK': 'REMARK', 'KLSTPN': 'KLSTPN', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'FTYPE': 'FTYPE', 'LAT': 'LAT', 'LON': 'LON', 'KOORDY': 'KOORDY', 'KOORDX': 'KOORDX', 'KOORDINAT1': 'KOORDINAT1', 'KORDINTAT2': 'KORDINTAT2', 'LUAS': 'LUAS', 'Elevasi': 'Elevasi', 'NAMLOK': 'NAMLOK', 'NAMSPE': 'NAMSPE', 'NAMMAP': 'NAMMAP', 'NAMGAZ': 'NAMGAZ', 'SJHNAM': 'SJHNAM', 'ARTINAM': 'ARTINAM', 'ASLBHS': 'ASLBHS', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'STATUS': 'STATUS', });
lyr_SARANAIBADAH_PT_25K_13.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'FGSIBD': 'FGSIBD', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_PENDIDIKAN_PT_25K_14.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'LUAS': 'LUAS', 'KATPDK': 'KATPDK', 'JLPDDK': 'JLPDDK', 'FGGPDK': 'FGGPDK', 'REMARK': 'REMARK', 'FCODE': 'FCODE', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'JJGPDF': 'JJGPDF', 'JNSPDL': 'JNSPDL', });
lyr_BANGUNAN_PT_25K_15.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', });
lyr_RUMAHKU_16.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_desa_0.set('fieldImages', {'id': 'TextEdit', 'rt': 'TextEdit', });
lyr_AGRIKEBUN_AR_25K_1.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSKBN': 'TextEdit', 'FCODE': 'TextEdit', 'PUDATE': 'DateTime', 'AQDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_AGRISAWAH_AR_25K_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'JNSSWH': 'TextEdit', 'FCODE': 'TextEdit', 'AQDATE': 'DateTime', 'PUDATE': 'DateTime', 'REMARK': 'TextEdit', 'KODLCO': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'TNMSWH': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_PEMUKIMAN_AR_25K_3.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_Bangunan_4.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'beds': 'TextEdit', 'layer': 'TextEdit', 'access_roo': 'TextEdit', 'parking': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'isced_leve': 'TextEdit', 'surface': 'TextEdit', 'addr_house': 'TextEdit', 'rooms': 'TextEdit', 'tunnel': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'tourism': 'TextEdit', 'opening_ho': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'width': 'TextEdit', 'shop': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'government': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_Jalanlengkapcopy_5.set('fieldImages', {'osm_id': 'TextEdit', 'nama': 'TextEdit', });
lyr_point_6.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'beds': 'TextEdit', 'layer': 'TextEdit', 'access_roo': 'TextEdit', 'parking': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'isced_leve': 'TextEdit', 'surface': 'TextEdit', 'addr_house': 'TextEdit', 'rooms': 'TextEdit', 'tunnel': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'tourism': 'TextEdit', 'opening_ho': 'TextEdit', 'highway': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'width': 'TextEdit', 'shop': 'TextEdit', 'oneway': 'TextEdit', 'barrier': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'operator': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'government': 'TextEdit', 'public_tra': 'TextEdit', });
lyr_SUNGAI_LN_25K_7.set('fieldImages', {'NAMOBJ': 'TextEdit', 'nama': 'TextEdit', });
lyr_JEMBATAN_PT_25K_8.set('fieldImages', {'NAMOBJ': 'TextEdit', 'TIPJMB': 'TextEdit', 'FGSJMB': 'TextEdit', 'TONJMB': 'TextEdit', 'TGGJMB': 'TextEdit', 'LBRJMB': 'TextEdit', 'MATJMB': 'TextEdit', 'STRJMB': 'TextEdit', 'DEKJMB': 'TextEdit', 'BTSJMB': 'TextEdit', 'AYUJMB': 'TextEdit', 'JBTJMB': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PEMERINTAHAN_PT_25K_9.set('fieldImages', {'REMARK': 'TextEdit', });
lyr_TAMBANGAN_PT_25K_10.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_TONGGAKKM_PT_25K_11.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_TOPONIMI_PT_25K_12.set('fieldImages', {'FCODE': 'TextEdit', 'NAMOBJ': 'TextEdit', 'ALIAS': 'TextEdit', 'LOKTPN': 'TextEdit', 'REMARK': 'TextEdit', 'KLSTPN': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'FTYPE': 'TextEdit', 'LAT': 'TextEdit', 'LON': 'TextEdit', 'KOORDY': 'TextEdit', 'KOORDX': 'TextEdit', 'KOORDINAT1': 'TextEdit', 'KORDINTAT2': 'TextEdit', 'LUAS': 'TextEdit', 'Elevasi': 'TextEdit', 'NAMLOK': 'TextEdit', 'NAMSPE': 'TextEdit', 'NAMMAP': 'TextEdit', 'NAMGAZ': 'TextEdit', 'SJHNAM': 'TextEdit', 'ARTINAM': 'TextEdit', 'ASLBHS': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'STATUS': 'TextEdit', });
lyr_SARANAIBADAH_PT_25K_13.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'FGSIBD': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_PENDIDIKAN_PT_25K_14.set('fieldImages', {'NAMOBJ': 'TextEdit', 'LUAS': 'TextEdit', 'KATPDK': 'TextEdit', 'JLPDDK': 'TextEdit', 'FGGPDK': 'TextEdit', 'REMARK': 'TextEdit', 'FCODE': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'JJGPDF': 'TextEdit', 'JNSPDL': 'TextEdit', });
lyr_BANGUNAN_PT_25K_15.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', });
lyr_RUMAHKU_16.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_desa_0.set('fieldLabels', {'id': 'no label', 'rt': 'no label', });
lyr_AGRIKEBUN_AR_25K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSKBN': 'no label', 'FCODE': 'no label', 'PUDATE': 'no label', 'AQDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_AGRISAWAH_AR_25K_2.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSWH': 'no label', 'FCODE': 'no label', 'AQDATE': 'no label', 'PUDATE': 'no label', 'REMARK': 'no label', 'KODLCO': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'TNMSWH': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_PEMUKIMAN_AR_25K_3.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Bangunan_4.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'beds': 'no label', 'layer': 'no label', 'access_roo': 'no label', 'parking': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'isced_leve': 'no label', 'surface': 'no label', 'addr_house': 'no label', 'rooms': 'no label', 'tunnel': 'no label', 'building_m': 'no label', 'landuse': 'no label', 'office': 'no label', 'addr_stree': 'no label', 'military': 'no label', 'tourism': 'no label', 'opening_ho': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'width': 'no label', 'shop': 'no label', 'oneway': 'no label', 'barrier': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'government': 'no label', 'public_tra': 'no label', });
lyr_Jalanlengkapcopy_5.set('fieldLabels', {'osm_id': 'no label', 'nama': 'no label', });
lyr_point_6.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'beds': 'no label', 'layer': 'no label', 'access_roo': 'no label', 'parking': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'isced_leve': 'no label', 'surface': 'no label', 'addr_house': 'no label', 'rooms': 'no label', 'tunnel': 'no label', 'building_m': 'no label', 'landuse': 'no label', 'office': 'no label', 'addr_stree': 'no label', 'military': 'no label', 'tourism': 'no label', 'opening_ho': 'no label', 'highway': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'width': 'no label', 'shop': 'no label', 'oneway': 'no label', 'barrier': 'no label', 'building': 'no label', 'capacity': 'no label', 'operator': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'government': 'no label', 'public_tra': 'no label', });
lyr_SUNGAI_LN_25K_7.set('fieldLabels', {'NAMOBJ': 'no label', 'nama': 'no label', });
lyr_JEMBATAN_PT_25K_8.set('fieldLabels', {'NAMOBJ': 'no label', 'TIPJMB': 'no label', 'FGSJMB': 'no label', 'TONJMB': 'no label', 'TGGJMB': 'no label', 'LBRJMB': 'no label', 'MATJMB': 'no label', 'STRJMB': 'no label', 'DEKJMB': 'no label', 'BTSJMB': 'no label', 'AYUJMB': 'no label', 'JBTJMB': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PEMERINTAHAN_PT_25K_9.set('fieldLabels', {'REMARK': 'no label', });
lyr_TAMBANGAN_PT_25K_10.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TONGGAKKM_PT_25K_11.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_TOPONIMI_PT_25K_12.set('fieldLabels', {'FCODE': 'no label', 'NAMOBJ': 'no label', 'ALIAS': 'no label', 'LOKTPN': 'no label', 'REMARK': 'no label', 'KLSTPN': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'FTYPE': 'no label', 'LAT': 'no label', 'LON': 'no label', 'KOORDY': 'no label', 'KOORDX': 'no label', 'KOORDINAT1': 'no label', 'KORDINTAT2': 'no label', 'LUAS': 'no label', 'Elevasi': 'no label', 'NAMLOK': 'no label', 'NAMSPE': 'no label', 'NAMMAP': 'no label', 'NAMGAZ': 'no label', 'SJHNAM': 'no label', 'ARTINAM': 'no label', 'ASLBHS': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'STATUS': 'no label', });
lyr_SARANAIBADAH_PT_25K_13.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'FGSIBD': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_PENDIDIKAN_PT_25K_14.set('fieldLabels', {'NAMOBJ': 'no label', 'LUAS': 'no label', 'KATPDK': 'no label', 'JLPDDK': 'no label', 'FGGPDK': 'no label', 'REMARK': 'no label', 'FCODE': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'JJGPDF': 'no label', 'JNSPDL': 'no label', });
lyr_BANGUNAN_PT_25K_15.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', });
lyr_RUMAHKU_16.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_RUMAHKU_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});