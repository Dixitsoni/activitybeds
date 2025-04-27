import React from "react";
import { Typography } from "@mui/material";
import { bookings } from "./utils";
import filterIcon from './assets/images/filter 1.png'
import { TableHeader } from './utils/index'
import CustomTable from "./components/Table/CustomTable";
import Sidebar from "./layout/sidebar/Sidebar";
import Header from "./layout/header/Header";
import CustomSelect from "./components/CustomSelect/CustomSelect";
import CustomButton from "./components/CustomButton/CustomButton";
import CustomButtonWithIcon from "./components/CustomButtonWithIcon/CustomButtonWithIcon";

export default function App() {
  return (
    <div className="flex min-h-screen bg-[#28282A] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-7 overflow-x-auto">

        {/* Header Content */}
        <Header />

        {/* Filters */}
        <div className="px-4 bg-[#181819] pb-6 rounded-t-xl">
          <div className="flex pt-[20px] flex-wrap gap-4 pb-6">
            {['Agent', 'Supplier', 'Booking ID', 'Lead Pax Name', 'Booking Status'].map((filter) => (
              <CustomSelect label={filter == 'Booking Status' ? filter : `${filter}...`} options={[`${filter} 1`, `${filter} 2`, `${filter} 3`]} />
            ))}

            <CustomButton
              value={'Apply'}
              variant="contained"
              sx={{ bgcolor: '#CD1E5F', width: '138px', height: '40px', gap: '12px', textTransform: 'capitalize', borderRadius: '8px', fontWeight: 500, fontSize: '14px' }}
            />

            <CustomButtonWithIcon
              color="primary"
              sx={{ border: '1px solid #F2377D', borderRadius: '8px', width: '117px', height: '40px', py: '10px', px: '20px' }}
            >
              <img src={filterIcon} alt="filterIcon" />
              <Typography sx={{ color: '#D7D7D7', fontSize: '14px', marginLeft: '8px', fontWeight: 500 }}>Filters</Typography>
            </CustomButtonWithIcon>

          </div>

          {/* Booking Table */}
          <CustomTable
            row={bookings}
            column={TableHeader}
          />
        </div>
      </main>
    </div>
  );
}
