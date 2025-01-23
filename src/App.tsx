import { ButtonMobile } from '@alfalab/core-components/button/mobile';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';
import { useState } from 'react';
import corner from './assets/corner.png';
import wand from './assets/wand.svg';
import { LS, LSKeys } from './ls';
import { appSt } from './style.css';
import { ThxLayout } from './thx/ThxLayout';

const optionsGroup1 = [
  {
    title: 'Получить помощь от цифрового помошника',
    description: 'Бот поможет проанализировать что на рынке и как вам действовать сейчас',
  },
  {
    title: 'Узнайте, насколько сбалансирован ваш портфель',
    description: 'Анализ активов и рекомендации по улучшению структуры',
  },
  {
    title: 'Поймите причины изменения стоимости портфеля',
    description: 'Саммаризатор AI объяснит основные драйверы изменений',
  },
  {
    title: 'Оцените быстро рыночную ситуацию',
    description: 'AI соберет актуальные новости и события, чтобы вы могли понять тренды за минуту.',
  },
  {
    title: 'Получите быстро выжимку по активу',
    description:
      'AI сформирует консенсус-прогноз рынка, основываясь на мнениях экспертов и аналитиков по вашим активам и запросам',
  },
];

const optionsGroup2 = [
  {
    title: 'Зарабатывайте на остатке средств',
    description: 'Получайте доход с процентов на свободные средства в портфеле',
  },
  {
    title: 'Торгуйте без комиссии',
    description: 'Совершайте 10 бесплатных сделок каждый месяц на акциях, облигациях и фондах',
  },
];

const optionsGroup3 = [
  {
    title: 'Получать уведомления о новых рекомендациях',
    description: 'Будьте в курсе всех изменений в вашем портфеле и рекомендациях',
  },
  {
    title: 'Получать уведомления о новых сигналах',
    description: 'Будьте в курсе всех изменений в вашем портфеле и рекомендациях',
  },
  {
    title: 'Получать уведомления о новых аналитиках',
    description: 'Будьте в курсе всех изменений в вашем портфеле и рекомендациях',
  },
];

const MIN_OPTIONS_GROUP1 = 3;
const MIN_OPTIONS_GROUP2 = 1;
const MIN_OPTIONS_GROUP3 = 2;

export const App = () => {
  const [loading, setLoading] = useState(false);
  const [err, setError] = useState(false);
  const [err2, setError2] = useState(false);
  const [err3, setError3] = useState(false);
  const [thxShow, setThx] = useState(LS.getItem(LSKeys.ShowThx, false));
  const [options, setOptions] = useState<string[]>([]);
  const [options2, setOptions2] = useState<string[]>([]);
  const [options3, setOptions3] = useState<string[]>([]);

  const toggleOption1 = (option: string) => {
    const newOptions = options.includes(option) ? options.filter(item => item !== option) : [...options, option];

    setOptions(newOptions);
    if (newOptions.length < MIN_OPTIONS_GROUP1) {
      setError(true);
    } else {
      setError(false);
    }
  };
  const toggleOption2 = (option: string) => {
    const newOptions = options2.includes(option) ? options2.filter(item => item !== option) : [...options2, option];

    setOptions2(newOptions);
    if (newOptions.length < MIN_OPTIONS_GROUP2) {
      setError2(true);
    } else {
      setError2(false);
    }
  };
  const toggleOption3 = (option: string) => {
    const newOptions = options3.includes(option) ? options3.filter(item => item !== option) : [...options3, option];

    setOptions3(newOptions);
    if (newOptions.length < MIN_OPTIONS_GROUP3) {
      setError3(true);
    } else {
      setError3(false);
    }
  };

  const submit = () => {
    if (
      options.length < MIN_OPTIONS_GROUP1 ||
      options2.length < MIN_OPTIONS_GROUP2 ||
      options3.length < MIN_OPTIONS_GROUP3
    ) {
      return;
    }
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
        <Typography.Text view="primary-small" color={err ? 'accent' : 'secondary'}>
          Выбрано {options.length} из 3
        </Typography.Text>

        {optionsGroup1.map(({ title, description }) => (
          <div
            key={title}
            className={appSt.box}
            onClick={
              !options.includes(title) && options.length === MIN_OPTIONS_GROUP1 ? undefined : () => toggleOption1(title)
            }
          >
            <div className={appSt.row}>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                {title}
              </Typography.Text>
              <Checkbox
                size={24}
                checked={options.includes(title)}
                disabled={!options.includes(title) && options.length === MIN_OPTIONS_GROUP1}
              />
            </div>
            <Typography.Text view="primary-small" color="secondary">
              {description}
            </Typography.Text>
          </div>
        ))}

        <Typography.TitleResponsive style={{ marginTop: '8px' }} tag="h2" view="small" font="system" weight="semibold">
          Финансы
        </Typography.TitleResponsive>
        <Typography.Text view="primary-small" color={err2 ? 'accent' : 'secondary'}>
          Выбрано {options2.length} из 1
        </Typography.Text>

        {optionsGroup2.map(({ title, description }) => (
          <div
            key={title}
            className={appSt.box}
            onClick={
              !options2.includes(title) && options2.length === MIN_OPTIONS_GROUP2 ? undefined : () => toggleOption2(title)
            }
          >
            <div className={appSt.row}>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                {title}
              </Typography.Text>
              <Checkbox
                size={24}
                checked={options2.includes(title)}
                disabled={!options2.includes(title) && options2.length === MIN_OPTIONS_GROUP2}
              />
            </div>
            <Typography.Text view="primary-small" color="secondary">
              {description}
            </Typography.Text>
          </div>
        ))}

        <Typography.TitleResponsive style={{ marginTop: '8px' }} tag="h2" view="small" font="system" weight="semibold">
          Инсайты
        </Typography.TitleResponsive>
        <Typography.Text view="primary-small" color={err3 ? 'accent' : 'secondary'}>
          Выбрано {options3.length} из 2
        </Typography.Text>

        {optionsGroup3.map(({ title, description }) => (
          <div
            key={title}
            className={appSt.box}
            onClick={
              !options3.includes(title) && options3.length === MIN_OPTIONS_GROUP3 ? undefined : () => toggleOption3(title)
            }
          >
            <div className={appSt.row}>
              <Typography.Text tag="p" defaultMargins={false} view="primary-small" weight="bold">
                {title}
              </Typography.Text>
              <Checkbox
                size={24}
                checked={options3.includes(title)}
                disabled={!options3.includes(title) && options3.length === MIN_OPTIONS_GROUP3}
              />
            </div>
            <Typography.Text view="primary-small" color="secondary">
              {description}
            </Typography.Text>
          </div>
        ))}
        <Gap size={96} />
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile loading={loading} block view="primary" onClick={submit}>
          Попробовать
        </ButtonMobile>
      </div>
    </>
  );
};
