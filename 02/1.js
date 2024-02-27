const h1 = document.querySelector("h1") // több megfelelő elemnél mindig az ELSŐ-t adja meg
h1.innerHTML = 'Valami <i>dőlt</i> szöveg'

const bek = document.querySelector("p")
bek.style.color = 'green'
bek.style.backgroundColor = 'yellow'

const img = document.querySelector("img")
img.src = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFRUZGBgaHBweHBoYHBocHh8cHB4aGhoaGhweIS4lHiErHxoeJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQIDBQYEBwj/xAA/EAABAwIEAwUGAwUIAwEAAAABAAIRAyEEEjFBBVFhBiJxgZETMqGxwfBCUtFicrLh8QcUFSMzgpLCNHPSg//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD15CW/JAQIiEIcgRQGoM0HS9z8lO4qKm0wM0EoGupGNfK1k57wNZtFh9ynRJ5BK1oGgEoCDztGiIQJkknwQBqgjIsd/u3zSOa0c76681IdDHxUb3aXt8+SCCvSBEEmLAgb9E2qy3IAQAAOqr+L8SyGAJk67eXmq/8Axg5Dn7gLTleJjc8rfVBbPiHASAZv5QopGgsMoHp156rHcZ7UsDQ2k+HNB94XJteVTYbtHiMudxa4XjUeWsA7oPRoAvawjfQkBGQEm2bLq6DBPL4rB0O2OQjPTJAB91250Jnl0Ksana8VG5WNNokTlJJ96Ikne/mg1ns5ABEXkAbQpsnLz8lV4DEPcwlzSHwBaIEn1sNZVo8OAi1mjrLjZAykRmMSZ5/finEGY/opm920baxFk0gxPVAoEIaPmlLNuSXxQMcYHWU6ALEzv66oa3WyALm1yB5AIE2OyWLC88z80FoMIFxp9hBHlPI/FCmzO6IQWwnlZBKCUSgCEIlBKBEgGickCBjWAEnnzKVhtKXySygRI48on7ulA3KaXR8EEVckAkCTbwAWb7WY17GMLCXQbhkgx+aOQiPNXtbECSJ8fBZjjfEskhtrbbW6bIMT2j4u9/dc4wHaAxYc/Irhf2ifkLM1jAnoNAOXU6lP4zleS4fiEnodFn/7sXGAEEj8eZJk96ZkD1uoquOcbDQei7uJcPawNLXOmN4PjBHyVQ4bgoOhuJN9/iE+hi3Ne106ELjh3NIzkdN0HomC7cBo7zXSbd2NBzk+K1XCuO0quUzeQLka35GR5gLxN2hClwtdzHBzHOY4aOab+Hgg+hy7eddkoHzK8/7HdqKmTLXaCxhA9pbMMwGUuG4vrtIW/a8G4uDogRrYBvc8uQ6p7h1QRe3X7CGtMayUCZhdNLSpQ2PBIG7ndAx5+adlAshre8DG31Q6L6dPqgjzH8qFLP73ohBZHzudUsBAJ1jmhxICBQOfokFymwefiiI23QK53M6oTWNjXUlO8SgBsgpBZNLxManwsgcR1ULnnNAjxUrpmALQoKz8vS/z1jqgreJPgF2mv9YWBxtQlru6LugASJO1h1lbjizHlpiGmAA78smLDc3GqrcBwRgcDclsjvEnvaExp/VBlaHZipUMugdBeIXRjeyTmt7gvGu69GoU2tFgm4lgIQePY/hhpU3F4DnPgATdoEgujfVZd7IBmen35r1jtDw4ZSSOk9NYXneOotDjYxoJQUdQeqVsAjxHzuFPiaEQkxDLghpkj+vxQcr06nUg3QHbwo0Gk7PcRaxtRhAIfzttF/EfJen9luLMqUGQ6XABsGRBAEi+vOy8UwtdzHBw2i2x6L0Xsrj2PloaO8Ae9fLG8x0Ajp1QekB0+CXXeN1XYHEZmjWQDeNwYmNt12U3WudfWxQSg7+iPmUusz6D6pRqDAFvRA1rTmmUogX++aRvLUlEgdSEBnPVCPaoQWUJC3z/AFSwhASlKQnRKUCJGNSoQN8UrB9/NA8EOP2EAfMKGuyY6XUhbNzoEtRohBwYvvS0QZtE+F02lShcvG8W+kwvYwOyuhwGuUiQRGu3xVbg+N56T3tiWyI67Sg0WaAuatUWBr9tMQX5GUmuPSSV2nEYsNzuiTqwm3h0QW3F6gcMuywWPwgaZ1BJ+eqtKvHC90ObldoRPyUGJ73Kd0GYxTJMRb5KvewtMkyPuyuOI04NzPgqvEPBHJBXg3SBOeIJ+CRgsgdsFZYDFPa4OYYjebeCrqbZE8lOxnPT4eiD0rs12lNR+V7YLpAIIgxAhw21stnRq2sfP9F5b2b7oIt3i0FzjBF5BC9EwdUQADoEFux3Xf4JzHA316rlZVFhOq6GGwQOLwLptNhOthdOPhonNKA9mhGcc0ILGUISoGoQhApSARZEoQBRCEBAHkmnXqlAQUFXx2nUNB/ssueJbJtbyKxZc7DUHNqQcRVALwIhnISAJN9V6BiqkCAdAvLeIYwOxDs0kjXeyDmwHDqxL6jKmRxIgESCACb8h4LpczFOBcXU3HfLI+Yt5la3hGHa+jmadTII2jaPvVQ4zAVny1rmAcxY+kIMXgMM6q55MSI8BMzPouuphi1t9dZK1eC4OzDMdmMk3JPTQLL8VxzS8gaIKPE0c2uuoWfrLR1nTYHW19lW4HBZ3m0hv9UFcMPmgG17W28FzvAbI5/d1cNeDUBDDDdAL67EKnxrSSOZJkdZQMaJgLswrR6z9/FNqljGta2cx1J66BLh3kkW/RBouEE52S8kZo1BiBItHRbvB1Adtlg+Egl4c6Dz81rcHUJOkeaDR4WsDp6x8l1sf5qtw9TQTA0XbSeg7AdkuqjB0UhQLCEkDl8UILMOQUIQIlCTLzShAiEQhAJQkJQgaLC5k7pfuP1QR0QHeSDK9r8TXotL2DMw+9Akt8uXVeeYXtE0OdNJ2Y6uIGvhqvXuMUw6nBs3MCZ5brIs4TRFR7wWFznEm4KBnYerULHueC1jnnICL6awdlY43HZHQNU2vUDKZIOhB8BoqXiDi58zZAcUxz32m3RZzEsi61Dw0MzHksxjHXmUFdiXzZXfBmFlMmmzPVqBwawRoLZpPUg/7Vnqrrqz4HxxtCsXvaXMDMgjUGQZCC2w3DG4No9r33gZg1rTqdQXaQOZWCxmJz1XvtEknxmTHmVZdqe0r8Q6GS1lx1I6qgwzoBkEjpqOvggmfXa7Yg/D+S7KQAAEfVclZ4IBbzA2B+C68EJiRfnewCC8wMhomxPy/or/AIW+Ly4k/BZ+hornAPNoQavCu03Ks6N/VU2F2nRWtPTVB3A3lSxz/Vc9IHnKmYgf6oS2QgsigoQSgEjZTgmoFCCgIKBEoSIlAhKUDp5oCDqgrePsY6g9rzlDhGblJsZXlz+zDAZbi3OM2iPovWsbhRUY9jrte0iI6fqsDS4EWvOTbZBxYfh1QDvVi8E7ty/GbqxxGEDGsm/dHyCmqZmjvGIVRj+I6DWBqgXHYi0fFZ3FVQAYKXHY/UKoq4lA2vUTA2WplJhe6F14puUQEFHimrmYY0XfiKchcTWIJaZ2GqvcKwgDwVdw6gfeKtGeiDtpSrnAM0VRhmmVfYGl5ILzC8/QfqrWg4kclWYVpACtMOAAJug7GFTNUFOVMwIHZjyCE+eqEFmkQ0oKAQUBAQIAlckOqEClIhBPJAQkaLn4JxSBAABed8c46cNULHiDJibSNiOYXon3ZQ4nCsqDK9jHjk9ocPQoPIOLdpg8WWaq8TcTzXo3aP8As3ovBfhneycLlrpLD0H4meUjovN3YF7Hlj2XHL6c0ET6jnbJzKG5XbTwRd7rh4GxUjsI4a/BAYChuFzY914WhwOGysk2Wcx/vnxQQBkhRMwoBuuqEQgGNjRT0mSmUmyVZ4XDSQgnwNIyLLSYOkq/BYUHmPVXeHpxvCDqoM21ViwLmoMhdTG7oOhgUrYUVOVK0fzQPzDkhE9PgUiC0QlRPVAgCSUpQPvwQJCUoJ2SAIFKRLK48fxGnQZnqvDWjTmTyaN0HXPJErA4r+0lgJDKDnCdXODfgAVWYr+0Ou+cjGMH/I/G3wQeoPeGgkkAcys3xvtXRpMeGOFR8aN0k83fovN8XxmtV9+o53Qm3ouMVNjoQg9T4bxB9WiHvcO9JAaIAAJAHM6arMcb4bnMts7YpeynFm5fYPdDgZbO4PJXmOw0iQg85x73ts5gDhvsVBw+m5zrh3lf5rZ4/Ah7CYuNoVRg+HmZG3JB14xmSjOlt9f5LFUW56hWo7WVHCmy+oVJwTCE35oG1KOUzFk5uH3WnpcNBb3oUTuFRcFBTUMDN4XTVeKLS9xBA2Op6BPxmMZQ9832aNT4BZjiGOdVdmdYD3W8up5lBc4Pta9rjnptLdgLEDqd1c0e2tIe9TeP3S0/NYRoSuCD1nhXaXDVYaH5Xflf3fQ6FaEAFeCgwrvhHaevh4h5ez8jzIjpuPJB7I3l/JPH35Ko7P8AHqeJZmZZw95hNx16jqrhrkCy7r6ITMp/MfQIQXEJCUqRAqRz0pQgQBJqfRBDpgRF5J18lVcV4wylLQ4Ofy2HLMR6wg5u03aNmGEDvPOjdh1d+i8r4nxCtiXl7y5x+DROg2Aur3EYIveX1HB5Jk66nxbHlC721CxuVkNtAOQOMbiTCDBVaJaQDqbxvHSdU1rV0dq69VlQudDm1BcxEkfwkRIIVPhcc4Rn7w57+fNBagILrIY4ESCCEpQKHSLz0O4PRXPDu1NWmMtT/MZzNngeO6pIhMc1B6Dg+0OGfpUa0nUP7p+Nk01GMcSyowgzMOB+qyGF7NYmrT9oyiSzZxLWg/u5iCfHRVeIwTmHK9mU9RHpzQartJTFV9OkwggC7pEeZXVhsC2k0Q9viXCPmsJkHIJHMHIINhjeNMZrUaTyaZ+Sp8d2pe4ZaTcg/OdfIKlLAmFqBjySSSSXHUm5SQnwiEAAhKUiAhc1R8u6BT135W+K5mC3igteB8Sfh6jajdjcc27he04DGNqMY9l2vAI8De68GrOiByhekf2f8SzUDTJksdAH7Lrj4yg3ub9pC5PaHkhBo90gS5UEoE5olDnwCSQALkm1hqSshxjjrquanhyQzR1TQu6N5N67/MDtX2oFIZKBkggVHi4Y3QwdyN+QndVmHALQfMk3JPMne6k4dQawFpaCDqDvNiFXYEGi92HeCAJNMn8VOYAnm33T0yoLDODYIDJsnso35roZQvfb+n34IKPjfB21qbmHe7TydsV5tQwjy80MvfzZYsLzEybAdTaF7M5nosT2y4W5jhiaQIc2zwN2GxPp92QLxDsPWw2HNb2rH5QC9jAQG/myuJ7+W2wtJ2VKyqIW47HMpV6Pt8ZWzAZcjKjh7NjRYEg2e7MIOadB0Kg4+/CvpO9lhnuGjKtGkQ15b+FpAgi5BdEeMIMm1hLXOAJa0S4gWA5lbbg3YZpLH1qgIEOfTa3mJDC+fWBzvuo8HUoMw4LMraOXVxtlIg5ydTsZV/2ba9jCxzszA4ua4mSWmzWnqI8wAg0TqTSzL7rAIAFrDQDkFiuNcOY4OEb73H35rS4jGF5yU253b7AfvHZc3EsAWMDi+XHWBYeG6DzJ/Z57szqb2GB7j5Y7/a9stPm1UJdeNDMEHUH8p6/A7L0YVQKmWWt5E2B6Kr7W8OpmmX5WteIlzd2yLkbxqD0jcoMa4Jrgik8uF9RYjqNU4hBHlTcqlKQoGgKLUwp2nVc9B9nHlKCHEnM6BsnUxfo25TcOLF5Tycrb6m5+gQQPMm6vux2MyYlgkw/uuHOxyz5ws8zcldODqljs4sW3HiLhB7d7XqUKj/xIIQelSoMXimU2l1Rwa0QJPM2AHMk6AXKmqVA0EuIAAJJNgANydl5V/aG+ucQHOcX0CAaTm+40x3myLZ5BdOsOEaINLxTGvxJymWUp9zd3Iv8A/lRexDRAC5+zuMFeiCYztMPEfiFw6OuvjPJWb6aDkBIcBEzqeQg39YS4nBZ2Rm74OZjiB3Tyt+Eix6FdIpp0XQVuArZmwRBFiDqCDBaeoNvjurFjZgnz+t1w8QpZHiq33XEB45O0a/8A6n/adl20XgjofsIFeyb+ui5sTQDmkETIiPouwj0THM+KDzFmBZhsYxlfMcM52djPwuMg+zdyG3pzK357UtxDxSwFAlzILnvGSmxukGATJ0AA+AK4e0/BhiKRbo73mHk4ffxWW4B2qrYdjqIpNLg+HNuHOf7omBcGBbogi45wHENqsdiHMZQrViCKLi5jHHdwcGhua5zaC5MaLcY3hmIwzKbKZHs+4y+YlslrYLibxc3vsuHHdln12Gtja1RhcQ59Jha1jLAN1mTpJnWbCVa9k+Le2w9TC1HirUohzWOBk1GNAyO/fEtB8Wn8UoLp3EKVBmUEADfcnmeqzOJ7RnEPczDMfWc2A4MEgWm7tG8rkLFf3h9XGUsNiXvYxz4e0ywxBIBm7cxAH+6y9Z/xDD4dgYzJTYwWaIa0eACDA45zs4a9jqbzoHDflIsV1Y7AB9ItfLTlMEeG4Kj49j3Pc57H3nbmNwuHiXG6j6Ds4BcG3ItrZBjMM7vvHOD5kAn5rsVfhHd+f2R8A0H4rtLkCOUbih7lE5yCWm6ziuRn+mebnQFPSPdd4KPDmQ0DYT5ndB0MZoNm6+K5a7pJK7K1hlHmq+tyQMbop3jKyNz9UtKnlGY+QUVV8oLD/E380KvQg9d7VduA0H2Dsrm5mVKNZmt8sjX3SL9HdLeanEOL3BhLGuOb2Yc7IQNBExLdAf1UWKxr6jy97i8nuvzATIAaCY6AA8/EqESO7Nxdh6cvog0/Zzi3sKjX3yO7rx+zz8W6+vNeoWcA5pkG4I3C8Sw9WfA/A7hejdiuL52excZey7JMSzcDnlPwIQactQ0TZKEOtf7+4QRvYHNLXAEOBBHMGxVRgKhY91F5lzfdJ/Ew+67x2PUdVdEXXDxTAl+V7P8AUpyW7ZhvTJ5HnsYOyDqpp77xbRcuBxLXsD26EbiD1BGxBsRsQV1gboIXMkQsB2x4YaNRuKY33SBUA5bOHUc/Ar0Nxtb5rjxmGD2FrhIIIIO46oMSzi2I4nVp4Z7x7GRmAJbmaASTUcLuJA0t4bqftPXZw94bhgGV4llRskFneBzAkgmZ15nmstxGhUwj30WuIY7v0zpp15jTxA5q04L2goYZj87DWqVILqhIzOH5ZcZEGem3VBDwLE0cS8/3tofVN21XEhzuhcCO8Dp6bBVvafAV2VyzO94IzsJJLnNGo6ubyF4gpuKwj6tXOygaVOo9oaXB2QF0Xz5Yi8mP0W3ZwF4oNoV3E1KbiaVVv4XjvNyuOtridRIOkIMZwPFyclRzmuPu5jAPqCrXiNIim8EzbbRarhdYV6bmVmNzsOSrTIkTsQD+FwuPHosv2h4a/DXa4uoOMNm5Y7ZhPI7HyPUM1QbDz0H6LtGELmOc0t7sS0mHQbS0H3uo6pcWxrCxwECpTaZ/azPaZ82KSg8sIcJEXkaxvE20lBXO5KF7loeMYQPh7YDtCMzXTuPdAg9d51OozzxFjqgdROvgnYAgNzHY+pUDHXUlMENERzugnqPgSdTt0UNKnPedpsOaAz8Tzb5pTiEDKtQlRwultQGxCa6EESEuYIQOc78R0NnDrzS5SRH4m6dR/MfROqtAM/hdY+Ox++SYyR+8z4tQSMeJB/C/4O2Pn81c8MxbmPY9phzHA/qD0It5qlcBP7L/AIH+eq6cLVO+os7w2cg9rwOJbVptew2cJvqDuD1BspiPu/0WE7GcYyP9k93cqEBpJsH6D/lYeMLfEIIiOaVpTnBIGwgqa7PY1cw9yqb8m1PoHgf8hzcrFj07EYdtRjmPHdcItqNwQdiDBB5hV+EqOEsf77DBPP8AK8dHC/QyNkHc4/f1TQEn35JdEGb7Y8BFemctnt7zDyPLwP6FeZ8DFJmJYcS3uNcZBiA8e7nmxbIuPovZsW+AZK8T4k91WrVeGwC5zoNu6DA84E+RQbriXblmKLaBYymxwcx1SC+C5uVpa2LN33+q1vZLPUoOw+JH+a1o70zmZqx4d+YWvfYnWF40arWBr6RzCO8HxmBgTI6E2Onotd2b7Vk1WvrvDMjDkImQDBkx7xMAEQfoQveL4V9KoK4b/mU+5Va0e/T1lo5j32+bVH2m4jh/7s5j3hwqsOQNguMiWPHIAwcxtZWGG7RtxZNQMyNYHMvyn8XI2BA2DtTdef8Aa3hhw9X2lIjJUBgWOUx3gB+W8jlJCCufiA9jGGcoc4gjUOIbI6tOUHpfqu957uVtyRoOQ1VJgqux11VvwnG5KzXWhwLDm0aHfi+HxQS0eJNzFjpaDYZYDQZkAjx38+qbjMIHjMBDvn0Kra1BzahYWx39t72IWqwjGPz5QQ3O4sB2bJyj0QYqqCDBsRzU7KjQ2YvpfmtTi+GsqAgjwI1Co38FqMPdGcDSIn0KDhbRe8ybDr+iY9zWmImF01adXdpb0KgMj3o8ygYcRs0Qo85Uwaw7geE/UJXUdxf5oIcqE+/JKg6q/uenzCY33/8AZ9EIQRs/0x4j+Irop++79wIQgs8P+Hwb/EvaHJEIEOyTfz+iEIGUdB4D5Ktxn/k//kz+OohCDsalQhBU8a/0n/uP/hK8ype83/1t/hQhBS4j/Uq/vP8Am5I33PIfxFCEGv7Hf6WJ8W/wlV/a7/yGf+mn/wBkqEGcZ7wXYNR+8z+IIQguafvs/cP/AGVnwr3B4fRCEHUNB5pj9QhCDg4zq3wPzCoq6EIK53vKc6IQg6kIQg//2Q=="

const h1s = document.querySelectorAll("h1") // ő már az összes h1-et megadja
//for (const el of h1s)
//    el.style.color = 'red'
h1s.forEach(el => el.style.color = 'red')

