import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { getUser, logout } from "../service/authorize";
import Swal from "sweetalert2";

const NavbarComponent = () => {
  const redirect = useNavigate();
  return (
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item pr-3 pt-3 pb-3">
          <Link className="nav-link" to="/">
            หน้าแรก
          </Link>
        </li>
        <li className="nav-item pr-3 pt-3 pb-3">
          <Link className="nav-link" to="/create">
            เขียนบทความ
          </Link>
        </li>
        {!getUser() && (
          <li className="nav-item pr-3 pt-3 pb-3">
            <Link className="nav-link" to="/login">
              เข้าสู่ระบบ
            </Link>
          </li>
        )}
        {getUser() && (
          <li className="nav-item pr-3 pt-3 pb-3">
            <button
              className="nav-link"
              onClick={() => {
                Swal.fire({
                  title: "คุณต้องการออกจากระบบหรือไม่?",
                  icon: "warning",
                  showCancelButton: true,
                  confirmButtonColor: "#3085d6",
                  cancelButtonColor: "#d33",
                  confirmButtonText: "ใช่",
                  cancelButtonText: "ไม่",
                }).then((result) => {
                  if (result.isConfirmed) {
                    logout(() => {
                      redirect("/");
                      Swal.fire({
                        title: "ออกจากระบบสำเร็จ",
                        icon: "success",
                      });
                    });
                  }
                });
              }}
            >
              ออกจากระบบ
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavbarComponent;
