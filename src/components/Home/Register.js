import React from "react";
import Image from "next/image";
import Link from "next/link";

const Register = () => {
  return (
    <main className="w-full h-full laptop:h-screen laptop:flex justify-center items-center">
      <section className="w-full h-full laptop:h-full laptop:flex">
        <div className="w-full laptop:w-2/5 h-full bg-secondary relative">
          <div className="w-full h-full flex flex-col p-5">
            <h1 className="text-primary text-[2rem] laptop:text-[2.5rem] leading-[2rem] laptop:leading-[2.8rem] font-bold laptop:font-extrabold">Solamente Con Registrarte Podrás</h1>
            <div className="mt-[15px] ml-[10px]">
              <div className=" flex items-center mt-1 laptop:mt-0">
                <div className="w-[30px] h-[30px] mr-[10px] relative">
                  <Image layout="fill" objectFit="contain" src="img/check.svg" alt="" />
                </div>
                <p className="text-primary font-medium text-sm laptop:text-base">Administrar la contabilidad de tu negocio.</p>
              </div>
              <div class="flex items-center mt-1 laptop:mt-0">
                <div className="w-[41px] h-[41px] mr-[10px] relative">
                  <Image layout="fill" objectFit="contain" src="/img/check.svg" alt="" />
                </div>
                <p className="text-primary font-medium text-sm laptop:text-base">Cargar fácilmente todo tu inventario y llevar un control de tu stock.</p>
              </div>
              <div class="flex items-center mt-1 laptop:mt-0">
                <div className="w-[30px] h-[30px] mr-[10px] relative">
                  <Image layout="fill" objectFit="contain" src="/img/check.svg" alt="" />
                </div>
                <p className="text-primary font-medium text-sm laptop:text-base">Gestionar tus clientes y proveedores.</p>
              </div>
            </div>

            <div class="form-register mt-10 laptop:hidden">
              <div className="w-[150px] h-[100px] relative">
                <Image layout="fill" objectFit="contain" src="/img/logo-almenu.png" alt="" />
              </div>

              <form action="">
                <div className="input-field">
                  <input className="input" type="text" placeholder=" " required />
                  <label className="label_name">Nombre(s)</label>
                </div>

                <div className="input-field">
                  <input className="input" type="text" placeholder=" " required />
                  <label className="label_name">Apellido(s)</label>
                </div>

                <div className="input-field">
                  <input className="input" type="text" placeholder=" " required />
                  <label className="label_name">Celular</label>
                </div>

                <div className="input-field">
                  <input className="input" type="text" placeholder=" " required />
                  <label className="label_name">Correo electronico</label>
                </div>

                <div className="input-field">
                  <input className="input" type="text" placeholder=" " required />
                  <label className="label_name">Contraseña</label>
                </div>

                <div className="input-field">
                  <input className="input" type="text" placeholder=" " required />
                  <label className="label_name">Confirmar contraseña</label>
                </div>

                <div className="py-[5px] px-[15px] bg-secondary flex justify-center rounded-xl text-base font-bold no-underline text-primary hover:bg-tertiary">
                  <a href="">Registrarme</a>
                </div>
              </form>
            </div>

            <div className="text-primary flex flex-col justify-center laptop:block mt-5 laptop:mt-0 laptop:absolute laptop:bottom-5">
              <p className="text-base font-medium text-center laptop:text-left">¿Ya tienes una cuenta?</p>
              <div className="flex justify-center">
                <Link className="text-[14px] font-normal no-underline text-primary flex items-center" href="/">
                  Inicia sesión aquí.
                  <div className="w-[15px] h-[15px] ml-[5px] relative ">
                    <Image layout="fill" objectFit="contain" src="/img/redirect-arrow.svg" alt="" />
                  </div>
                </Link>              
              </div>
            </div>
          </div>

          <div className="hidden laptop:block w-[310px] h-[310px] absolute bottom-0 right-0">
            <Image layout="fill" objectFit="contain" src="/img/img-register.png" alt="" />
          </div>          
        </div>

        <div className="hidden laptop:flex h-full justify-center items-center w-3/5 ">
          <div class="form-register">
            <div className="w-[150px] h-[100px] relative">
              <Image layout="fill" objectFit="contain" src="/img/logo-almenu.png" alt="" />
            </div>

            <form action="">
              <div class="input-field">
                <input class="input" type="text" placeholder=" " required />
                <label class="label_name">Nombre(s)</label>
              </div>

              <div class="input-field">
                <input class="input" type="text" placeholder=" " required />
                <label class="label_name">Apellido(s)</label>
              </div>

              <div class="input-field">
                <input class="input" type="text" placeholder=" " required />
                <label class="label_name">Celular</label>
              </div>

              <div class="input-field">
                <input class="input" type="text" placeholder=" " required />
                <label class="label_name">Correo electronico</label>
              </div>

              <div class="input-field">
                <input class="input" type="text" placeholder=" " required />
                <label class="label_name">Contraseña</label>
              </div>

              <div class="input-field">
                <input class="input" type="text" placeholder=" " required />
                <label class="label_name">Confirmar contraseña</label>
              </div>

              <div class="button-register">
                <a href="">Registrarme</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Register;