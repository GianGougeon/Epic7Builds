/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import Select from "react-select";
import styles from "../../../styles/sass/components/hero/herosDetail.module.scss";
const SelectStats = (prop) => {
    const { setCollar, type } = prop;

    //=============================[retorna las opciones]=============================
    // retorna las opciones
    const options = () => {
        const setStat = type.map((item) => ({
            value: item.name,
            label: (
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    
                    <div>
                        <img
                        className={styles.select_img_stat}
                            style={{ marginRight: "5px", filter: "invert(1)" }}
                            src={item.img}
                            height="30px"
                            width="30px"
                        />
                        {item.name}
                    </div>
                    
                </div>
            ),
        }));
        // ordena las piesas por nombre
        setStat.sort((a, b) => a.name > b.name);
        return setStat;
    };

    const optionsStats = options();

    // captura la opcion del set seleccionada
    const handleChange = (e) => {
        console.log(type);
        setCollar({
            name: e.value,
            img: type.find((item) => item.name === e.value).img,
        });
    };

    return (
        <>
            <Select
                classNamePrefix="select"
                options={optionsStats}
                isDisabled={false}
                isLoading={false}
                isClearable={false}
                isRtl={false}
                isSearchable={false}
                onChange={(e) => handleChange(e)}
            />
        </>
    );
};

export default SelectStats;
