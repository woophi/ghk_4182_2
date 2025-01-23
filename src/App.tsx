import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { CDNIcon } from '@alfalab/core-components/cdn-icon';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import corner from './assets/corner.png';
import wand from './assets/wand.svg';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));

  const submit = () => {
    setLoading(true);

    // sendDataToGA({
    //   autopayments: Number(checked) as 1 | 0,
    //   limit: Number(checked2) as 1 | 0,
    //   limit_sum: limit ?? 0,
    //   insurance: Number(checked3) as 1 | 0,
    //   email: email ? 1 : 0,
    // }).then(() => {
    //   LS.setItem(LSKeys.ShowThx, true);
    //   setThx(true);
    //   setLoading(false);
    // });
    // LS.setItem(LSKeys.ShowThx, true);
    setThx(true);
    setLoading(false);
  };

  if (thxShow) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div style={{ color: '#fff', position: 'relative' }}>
          <Typography.TitleResponsive style={{ marginTop: '1rem' }} tag="h1" view="xlarge" font="system" weight="semibold">
            PRO инвестиции
          </Typography.TitleResponsive>
          <div style={{ marginTop: '8px', maxWidth: '222px' }}>
            <Typography.Text view="primary-small">Подписка, которая экономит ваши деньги и время</Typography.Text>
          </div>

          <div className={appSt.tag}>
            <img width={16} height={16} src={wand} />
            <Typography.Text view="primary-small" weight="bold">
              AI рекомендации
            </Typography.Text>
          </div>

          <img src={corner} width={170} height={117} className={appSt.cornerImg} />
        </div>
      </div>
      <div className={appSt.containerBox}>
        <Typography.TitleResponsive style={{ marginTop: '8px' }} tag="h2" view="small" font="system" weight="semibold">
          Торговля с AI-помощником
        </Typography.TitleResponsive>

        <div className={appSt.box}>
          <CDNIcon name="glyph_robot_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Получить помощь от цифрового помошника
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Бот поможет проанализировать что на рынке и как вам действовать сейчас
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.box}>
          <CDNIcon name="glyph_scales_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Узнайте, насколько сбалансирован ваш портфель
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Анализ активов и рекомендации по улучшению структуры
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.box}>
          <CDNIcon name="glyph_briefcase_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Поймите причины изменения стоимости портфеля
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Саммаризатор AI объяснит основные драйверы изменений
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.box}>
          <CDNIcon name="glyph_lightning_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Оцените быстро рыночную ситуацию
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              AI соберет актуальные новости и события, чтобы вы могли понять тренды за минуту.
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.box}>
          <CDNIcon name="glyph_bubble-lines_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Получите быстро выжимку по активу
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              AI сформирует консенсус-прогноз рынка, основываясь на мнениях экспертов и аналитиков по вашим активам и
              запросам
            </Typography.Text>
          </div>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '8px' }} tag="h2" view="small" font="system" weight="semibold">
          Финансы
        </Typography.TitleResponsive>

        <div className={appSt.box}>
          <CDNIcon name="glyph_piggy_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Зарабатывайте на остатке средств
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Получайте доход с процентов на свободные средства в портфеле
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.box}>
          <CDNIcon name="glyph_percent_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Торгуйте без комиссии
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Совершайте 10 бесплатных сделок каждый месяц на акциях, облигациях и фондах
            </Typography.Text>
          </div>
        </div>

        <Typography.TitleResponsive style={{ marginTop: '8px' }} tag="h2" view="small" font="system" weight="semibold">
          Инсайты
        </Typography.TitleResponsive>

        <div className={appSt.box}>
          <CDNIcon name="glyph_bulb_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Узнавайте, куда инвестируют топовые трейдеры
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Получайте сигналы о действиях авторов успешных стратегий и топ-10 доходных инвесторов
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.box}>
          <CDNIcon name="glyph_chart-column-three-asc-arrow_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Доступ к эксклюзивной аналитике
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Читайте обзоры ключевых рынков, секторов и эмитентов
            </Typography.Text>
          </div>
        </div>
        <div className={appSt.box}>
          <CDNIcon name="glyph_bubble-lines_m" />
          <div>
            <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
              Общайтесь с экспертами в закрытых сообществах
            </Typography.Text>
            <Typography.Text view="primary-small" color="secondary">
              Присоединяйтесь к профессиональным аналитикам и трейдерам Альфа Инвестиций
            </Typography.Text>
          </div>
        </div>
        <Gap size={96} />
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Создать шаблон оплаты
        </ButtonMobile>
      </div>
    </>
  );
};
